from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

# Secret key for session handling
app.secret_key = 'your_secret_key'

# MySQL Configuration
app.config['MYSQL_HOST'] = 'rds-dev-jan-25.cv0cmgoqam9i.ap-south-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'ubiATT'
app.config['MYSQL_PASSWORD'] = 'Ubitech@123'
app.config['MYSQL_DB'] = 'ubitechdb01'

# Initialize MySQL
mysql = MySQL(app)

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']

        print("Checking for user:", username)  # Debugging print

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM Organization WHERE Email = %s', (username,))
        account = cursor.fetchone()
        cursor.close()

        print("Account fetched from DB:", account)  # Debugging print

        if account:
            session['loggedin'] = True
            session['id'] = account['Id']
            session['username'] = account['Email']  # Ensure correct key from DB
            msg = 'Logged in successfully!'
            return render_template('index.html', msg=msg)
        else:
            print("No account found for:", username)  # Debugging print
            msg = 'Incorrect username or password!'
            return render_template('userNotFound.html', msg=msg)

              
    return render_template('login.html', msg=msg)

@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    msg = ''
    
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        print("Registering user:", username, email)  # Debugging print

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM Organization WHERE Email = %s', (email,))
        account = cursor.fetchone()

        if account:
            print("Account already exists!")  # Debugging print
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            print("Invalid email entered:", email)  # Debugging print
            msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            print("Invalid username entered:", username)  # Debugging print
            msg = 'Username must contain only letters and numbers!'
        elif not username or not password or not email:
            print("Form incomplete!")  # Debugging print
            msg = 'Please fill out the form!'
        else:
            cursor.execute('INSERT INTO Organization (Email, PhoneNumber) VALUES (%s, %s)', (email, password,))
            mysql.connection.commit()
            print("User registered successfully!")  # Debugging print
            msg = 'You have successfully registered!'
        
        cursor.close()
    
    elif request.method == 'POST':
        msg = 'Please fill out the form!'
    
    return render_template('register.html', msg=msg)

if __name__ == '__main__':
    app.run(debug=True)

#flask_mysqldb: Imports the module for connecting to MySQL databases from Flask.
#MySQLdb.cursors: Imports the cursor class for interacting with the MySQL database.
#re: Imports the regular expression module for email and username validation.
#app = Flask(__name__): Creates a Flask application instance.
#mysql = MySQL(app): Initializes the MySQL extension, linking it to the Flask app.
