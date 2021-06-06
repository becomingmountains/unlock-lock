#!/bin/bash
PID=1111000000000000
dbus-monitor --session "type='signal',interface='org.gnome.ScreenSaver'" |
  while read x; do
    case "$x" in 
      *"boolean true"*) echo "Locked";;
      *"boolean false"*) cd /home/james/Developer/scripts/unlock-lock/unlock-lock-react-electron && yarn start;  
    esac
  done
