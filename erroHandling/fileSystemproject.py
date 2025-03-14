import os

def create_file(filename):
    try:
        with open(filename, 'x') as f:
            print(f"File name '{filename}' created successfully")
    except FileExistsError:
        print(f"File '{filename}' already exists")
    except Exception as e:
        print(f'An error occurred: {e}')

def view_all_file():
    files = os.listdir()
    if not files:
        print("No files found")
    else:
        print("Files in directory:")
        for file in files:
            print(file)

def delete_files(filename):
    try:
        os.remove(filename)
        print(f"{filename} has been deleted successfully")
    except FileNotFoundError:
        print(f'File "{filename}" not found')
    except Exception as e:
        print(f'An error occurred: {e}')

def read_file(filename):
    try:
        with open(filename, 'r') as f:
            content = f.read()
            print(f"Content of file '{filename}':\n{content}")
    except FileNotFoundError:
        print(f"File '{filename}' not found")
    except Exception as e:
        print(f'An error occurred: {e}')

def edit_file(filename):
    try:
        with open(filename, 'a') as f:
            content = input('Enter data to add: ')
            f.write(content + "\n")
            print(f"Content added to '{filename}'")
    except FileNotFoundError:
        print(f"File '{filename}' not found")
    except Exception as e:
        print(f'An error occurred: {e}')

def add_content_to_file(filename):
    try:
        mode = input("Enter 'w' to overwrite or 'a' to append: ").lower()
        if mode not in ['w', 'a']:
            print("Invalid choice. Use 'w' for overwrite or 'a' for append.")
            return
        with open(filename, mode) as f:
            content = input('Enter content to add: ')
            f.write(content + "\n")
            action = "overwritten" if mode == 'w' else "appended"
            print(f"Content {action} in '{filename}'")
    except FileNotFoundError:
        print(f"File '{filename}' not found")
    except Exception as e:
        print(f'An error occurred: {e}')

def main():
    while True:
        print("\nFile Management App")
        print('1: Create File')
        print('2: View All Files')
        print('3: Delete File')
        print('4: Read File')
        print('5: Edit File (Append)')
        print('6: Add/Overwrite Content in File')
        print('7: Exit')
        
        choice = input("Enter your choice: ")

        if choice == '1':
            filename = input("Enter the file name to create: ")
            create_file(filename)
        elif choice == '2':
            view_all_file()
        elif choice == '3':
            filename = input("Enter the file name to delete: ")
            delete_files(filename)
        elif choice == '4':
            filename = input("Enter the file name to read: ")
            read_file(filename)
        elif choice == '5':
            filename = input("Enter the file name to edit (append content): ")
            edit_file(filename)
        elif choice == '6':
            filename = input("Enter the file name to add/overwrite content: ")
            add_content_to_file(filename)
        elif choice == '7':
            print('Closing the app...')
            break
        else:
            print("Please select a valid option")

if __name__ == '__main__':
    main()
