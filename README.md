# Simulate html5 drag and drop in protractor
https://gist.github.com/leesaxby/fabc59c82569a225f8d833b5924e23c6

Selenium/Chromedriver appear to have issues firing html5 drag and drop events.
https://bugs.chromium.org/p/chromedriver/issues/detail?id=841

This is a basic app to test a work around using JavaScript custom events.
This fix is specifically targeted to fix drag and drop issues when using https://github.com/marceljuenemann/angular-drag-and-drop-lists with protractor.
