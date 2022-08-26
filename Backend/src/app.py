from flask import Flask, request, jsonify 
from flask_cors import CORS 
from os import listdir
from os.path import isfile, join
import os
import shutil
import urllib
import psutil
import ctypes
import platform
import sys


app = Flask(__name__)

CORS(app)
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'message': 'Resource Not Found ' + request.url,
        'status': 404
    }
    response = jsonify(message)
    response.status_code = 404
    return response

@app.route('/apache' , methods=['GET'])
def apache():
    # Define Variable
    url = "https://www.google.com"
    status_code = urllib.request.urlopen(url).getcode()
    website_is_up = status_code == 200
    
    # Create Dictionary
    value = {
        "url": url,
        "website_is_up": website_is_up
    }
  
    # Dictionary to JSON Object using dumps() method
    # Return JSON Object
    return jsonify(value)

@app.route('/backup' , methods=['GET'])
def organizer(): 
    try:
        path= "/home/titansax/Descargas/"
        for(path, dirs,files) in os.walk(path):
            for file in files:
                extension=file.split('.')[1]
                print(file)
                print(extension)
                oldPath = path + file
                print(oldPath)
                fullPath = "/home/titansax/Documentos/" + file
                print(fullPath) 
                shutil.copy(oldPath, fullPath)
                
    except: 
        print("Exception")

    print("procastination done")
    value = {
        "status": 200,
    }
  
    # Dictionary to JSON Object using dumps() method
    # Return JSON Object
    return jsonify(value)


@app.route('/dd', methods=['GET'])
def ddBackup():
    print("Starting backup")
    from datetime import datetime
    from pathlib import Path
    import zipfile


    OBJECT_TO_BACKUP = '/home/titansax/Documentos'  # The file or directory to backup
    BACKUP_DIRECTORY = '/home/titansax/backup'  # The location to store the backups in
    MAX_BACKUP_AMOUNT = 5  # The maximum amount of backups to have in BACKUP_DIRECTORY


    object_to_backup_path = Path(OBJECT_TO_BACKUP)
    backup_directory_path = Path(BACKUP_DIRECTORY)
    assert object_to_backup_path.exists()  # Validate the object we are about to backup exists before we continue

    # Validate the backup directory exists and create if required
    backup_directory_path.mkdir(parents=True, exist_ok=True)

    # Get the amount of past backup zips in the backup directory already
    existing_backups = [
        x for x in backup_directory_path.iterdir()
        if x.is_file() and x.suffix == '.zip' and x.name.startswith('backup-')
    ]

    # Enforce max backups and delete oldest if there will be too many after the new backup
    oldest_to_newest_backup_by_name = list(sorted(existing_backups, key=lambda f: f.name))
    while len(oldest_to_newest_backup_by_name) >= MAX_BACKUP_AMOUNT:  # >= because we will have another soon
        backup_to_delete = oldest_to_newest_backup_by_name.pop(0)
        backup_to_delete.unlink()

    # Create zip file (for both file and folder options)
    backup_file_name = f'backup-{datetime.now().strftime("%Y%m%d%H%M%S")}-{object_to_backup_path.name}.zip'
    zip_file = zipfile.ZipFile(str(backup_directory_path / backup_file_name), mode='w')
    if object_to_backup_path.is_file():
        # If the object to write is a file, write the file
        zip_file.write(
            object_to_backup_path.absolute(),
            arcname=object_to_backup_path.name,
            compress_type=zipfile.ZIP_DEFLATED
        )
    elif object_to_backup_path.is_dir():
        # If the object to write is a directory, write all the files
        for file in object_to_backup_path.glob('**/*'):
            if file.is_file():
                zip_file.write(
                    file.absolute(),
                    arcname=str(file.relative_to(object_to_backup_path)),
                    compress_type=zipfile.ZIP_DEFLATED
                )
    # Close the created zip file
    zip_file.close()
    print("Backup created successfully!!")
    value = {
        "status": 200,
    }
  
    # Dictionary to JSON Object using dumps() method
    # Return JSON Object
    return jsonify(value)

@app.route('/cpu' , methods=['GET'])
def cpuUsage():
    
    
    # Calling psutil.cpu_precent() for 4 seconds
    print('The CPU usage is: ', psutil.cpu_percent(4))
    value = {
        "cpu": psutil.cpu_percent(4)
    }
    # Dictionary to JSON Object using dumps() method
    # Return JSON Object
    return jsonify(value)

@app.route('/disco' , methods=['GET'])

def get_free_space_mb():
    dirname = "/"
    """Return folder/drive free space (in megabytes)."""
    if platform.system() == 'Windows':
        free_bytes = ctypes.c_ulonglong(0)
        ctypes.windll.kernel32.GetDiskFreeSpaceExW(ctypes.c_wchar_p(dirname), None, None, ctypes.pointer(free_bytes))
        return free_bytes.value / 1024 / 1024
    else:
        st = os.statvfs(dirname)
        print(st.f_bavail * st.f_frsize / 1024 / 1024)
        value = {
            "disco": st.f_bavail * st.f_frsize / 1024 / 1024
        }
        # Dictionary to JSON Object using dumps() method
        # Return JSON Object
        return jsonify(value)

        

@app.route('/os' , methods=['GET'])
def get_os_info():
    os_name = platform. system() 
    print(os_name)
    value = {
        "os": os_name
    }
    # Dictionary to JSON Object using dumps() method
    # Return JSON Object
    return jsonify(value)    
@app.route('/')
def index():
    return ''
if __name__ == "__main__": 
    app.run(debug=True)