var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function () {
    var mainWindow = new BrowserWindow({
        fullscreen: true
    });
    console.log('file://' + __dirname + '/index.html');
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});