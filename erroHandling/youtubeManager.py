file = open('youtube.txt','w')
  
#   old code
# try:
#   file.write('poornima and aman')
# finally:
#   file.close()


# //one line code of python

# with open('youtube.txt','w')   as file:
#    file.write('chai or python')

import  json 
def load_data():
        try:
                with open("youtube.txt",'r') as file:
                      test = json.load(file)
                      print(test,"text")
                      print(type(test),"text")
                      return test
        except (FileNotFoundError, json.JSONDecodeError):
                return []
        
        
def save_data_helper(videos):
        with open("youtube.txt",'w') as file:
                json.dump(videos,file)
                


def list_all_videos(videos):
    print("\n")
    print("*"*40)
    if not videos:
        print("No videos found!")
    else:
        for index, video in enumerate(videos, start=1):
            print(f"{index}. Video Name: {video['name']}, Duration: {video['time']}")
    print("\n")
    print("*"*40)

def add_video(video):
           video_name = input("Enter video name:")
           time =  input("Enter video time:")
           video.append({'name':video_name,"time":time})
           save_data_helper(video)

def upadate_video(video):
             list_all_videos(video)
             index =  int(input("Enter the value to update"))
             if 1<=index<len(video):
                video_name = input("Enter video name:")
                time =  input("Enter video time:")
                video[index-1] ={'name':video_name,'time':time}
                save_data_helper(video)

def delete_video(video):
             pass





def main():
        videos =load_data()
        while True:
            print("\n youtube Manager | choose an option")
            print("1. List a favourite videos")
            print("2. Add a youtube video")
            print("3. Update a youtube video")
            print("4. Delete a youtube video")
            print("5. Exist the app")
            choice = input("Enter your choice")
            

            match choice:
                case '1':       
                            list_all_videos(videos)
                case '2':       
                            add_video(videos)
                case '3':       
                            upadate_video(videos)
                case '4':       
                            delete_video(videos)
                case '5':       
                            break
                case _:       
                            print("Invalid choice")


if __name__ ==  "__main__":
     main()


