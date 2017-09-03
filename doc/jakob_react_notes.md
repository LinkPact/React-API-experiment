# Basic useful commands

* react-native-git-upgrade - Upgrade the React Native to latest stable (in theory gracefully)
* react-native-rename <new name> - Rename project, requires prior install through npm
* Connect to console output: adb logcat `*:S ReactNative:V ReactNativeJS:V`
    * Add "grep \^I" to get only console printing

# Issues

## General run issues

* 'Could not connect to development server'
    * For physical device - setup request forwarding: 'adb reverse tcp:8081 tcp:8081'

## Building to Android

* If Android directory is messed up, attempt clean and rebuild:
    * cd android
    * ./gradlew clean
    * cd ..
    * react-native run-android


