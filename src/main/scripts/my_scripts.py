import psutil

def get_flash_drives():
    partitions = psutil.disk_partitions()
    drives = []
    for partition in partitions:
        if 'removable' in partition.opts:
            drives.append(partition.device)
    return drives

flash_drives = get_flash_drives()
flash_drives_count = len(flash_drives)

if flash_drives_count >= 1 :
    print(flash_drives)
else :
    # this sends the error message to node js ( this is my exception handler )
    print("no-drive-detected")


# print('Hello from Python!')
# print('Arguments:', sys.argv[1:])

# import os
# import shutil
# import sys
# path = r"D:\jp"

# try:
#     # check if path exist
#     l = os.listdir(path)

#     src_file_paths = []
#     dst_file_paths = []
    
#     for root, dirs, files in os.walk(path):
#         for f in files:
#             path_src = os.path.join(root, f)
#             path_dst = os.path.join('C:/Users/japos/OneDrive/Desktop/{}'.format(f))
            
#             # print(path_src)
#             src_file_paths.append(path_src)
#             # dst_file_paths.append(path_dst)
#             # shutil.copy(src=path_src, dst=path_dst)

#     print(src_file_paths)
#     # print(dst_file_paths)
# except:
#     print("No path detected")