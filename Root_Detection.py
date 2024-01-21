import frida
import sys

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

def detect_root(package_name):
    # Attach to the target application
    session = frida.get_usb_device().attach(package_name)

    # Load the JavaScript code to detect root access
    with open('root_detection.js', 'r') as f:
        script_code = f.read()

    # Create the script
    script = session.create_script(script_code)
    script.on('message', on_message)

    # Load the script into the target application and run it
    script.load()
    sys.stdin.read()

if __name__ == '__main__':
    # Replace 'com.example.app' with the package name of your target
    detect_root(com.project.imperialcreation.XXX.dev)
