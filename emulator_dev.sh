#!/bin/bash

# Forward connections to ADB on port 5037 in WSL 2 to ADB on the Windows host
socat TCP4-LISTEN:5037,fork TCP4:$WSL_HOST_IP:5037 &

# Emulator/device can now connect to API/backend on localhost:4000
adb reverse tcp:4000 tcp:4000

# Live-reload does not work with localhost, thus external
ionic cap run android -l --external -p=3000
