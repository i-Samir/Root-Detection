Java.perform(function() {
    var rootDetection = {
        checkSuBinary: function() {
            var file = Java.use('java.io.File');
            var suPaths = [
                '/system/bin/su',
                '/system/xbin/su',
                '/sbin/su',
                '/system/su',
                '/system/bin/.ext/su',
                '/system/xbin/mu',
                '/system/bin/.ext/.su',
                '/system/xbin/.su',
                '/system/app/Superuser.apk',
                '/system/app/SuperSU.apk',
                '/system/app/ChainfireSuperSU.apk',
                '/data/local/su',
                '/data/local/xbin/su',
                '/data/local/bin/su',
                '/data/local/su',
                '/data/local/su',
                '/data/local/xbin/su',
                '/data/local/bin/su',
                '/data/local/su',
                '/data/local/su',
                '/data/local/xbin/su',
                '/data/local/bin/su'
            ];

            for (var i = 0; i < suPaths.length; i++) {
                var path = suPaths[i];
                var suFile = file.$new(path);
                if (suFile.exists()) {
                    return true;
                }
            }

            return false;
        },

        checkSuperuserApk: function() {
            var context = 
Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();
            var packageManager = context.getPackageManager();
            var packageName = 'eu.chainfire.supersu';
            try {
                packageManager.getPackageInfo(packageName, 0);
                return true;
            } catch (e) {
                return false;
            }
        },

        checkRootAccess: function() {
            if (this.checkSuBinary() || this.checkSuperuserApk()) {
                send('Root access detected!');
            } else {
                send('No root access detected.');
            }
        }
    };

    rootDetection.checkRootAccess();
});
