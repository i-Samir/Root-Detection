To detect root access in an Android APK using Python, you can utilize the frida library along with the frida-tools package. Frida allows you to inject JavaScript code into a running process, which can be used to interact with the target application and detect root access.
you'll notice an additional file, root_detection.js, which contains the JavaScript code that will be injected into the target application. Script give you the ability to detect the su directory in application source code.

## Usage:
To run the script, make sure you have frida and frida-tools installed. You can install them using pip:
```
pip install frida frida-tools
```
Connect your Android device to your computer and ensure that USB debugging is enabled. Then, replace `com.XXX.app` in the Python script with the package name of the target application you want to analyze for root access.

Run the Python script, and it will inject the JavaScript code into the target application and print the result indicating whether root access is detected or not.

**Note**: This method relies on Frida and may not work with all APKs or in all scenarios. Additionally, keep in mind that rooting an Android device may be a violation of the device's warranty or terms of service, and it can also introduce security risks.

