#!/bin/bash

adb logcat `*:S ReactNative:V ReactNativeJS:V` | grep \^I

