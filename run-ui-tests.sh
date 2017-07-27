#!/usr/bin/env bash

# Start selenium
(selenium-standalone start >/dev/null 2>&1 &)
# Wait for port 4444 to be listening connections
while ! nc -z 127.0.0.1 4444; do sleep 10; done

# Run protractor
protractor protractor.conf.js

# Kill http-server processes
fuser -k -n tcp 4444