#!/usr/bin/python3
import time
import subprocess
import os
pid = os.getpid()
print(pid)
time.sleep(10)
#print('uncloked')
subprocess.run(["gnome-screensaver-command", "--lock"])
