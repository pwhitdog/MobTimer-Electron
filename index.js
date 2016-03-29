var app = require('app');
var BrowserWindow = require('browser-window');
require("electron-reload")(__dirname);

app.on('ready', function () {
    var mainWindow = new BrowserWindow({
        fullscreen: true
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});