import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('youtube.db')
cursor = conn.cursor()

# Create videos table (if not exists)
cursor.execute('''
    CREATE TABLE IF NOT EXISTS videos (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        time TEXT NOT NULL
    )
''')
conn.commit()

# Function to list all videos
def list_video():
    cursor.execute("SELECT * FROM videos")
    for row in cursor.fetchall():
        print(row, "row")

# Function to add a new video
def add_video(videoName, videotime):
    cursor.execute("INSERT INTO videos (name, time) VALUES (?, ?)", (videoName, videotime))
    conn.commit()

# Function to update video details
def update_video(id, newvideoName, newvideotime):
    cursor.execute("UPDATE videos SET name = ?, time = ? WHERE id = ?", (newvideoName, newvideotime, id))
    conn.commit()

# Function to delete a video
def delete_video(id):
    cursor.execute("DELETE FROM videos WHERE id = ?", (id,))
    conn.commit()

# Main menu loop
def main():
    while True:
        print("\nYouTube Manager with DB")
        print("1. List Videos")
        print("2. Add Video")
        print("3. Update Video")
        print("4. Delete Video")
        print("5. Exit")

        userchoice = input("Enter your choice: ")

        if userchoice == '1':
            list_video()
        elif userchoice == "2":
            videoName = input("Enter video name: ")
            videotime = input("Enter video time: ")
            add_video(videoName, videotime)
        elif userchoice == "3":
            videoId = input("Enter video ID to update: ")
            videoName = input("Enter new video name: ")
            videotime = input("Enter new video time: ")
            update_video(videoId, videoName, videotime)
        elif userchoice == "4":
            videoId = input("Enter video ID to delete: ")
            delete_video(videoId)
        elif userchoice == "5":
            break
        else:
            print("Please select a valid option.")

    conn.close()

if __name__ == "__main__":
    main()
