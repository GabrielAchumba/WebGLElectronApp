const { app, BrowserWindow } = require('electron');

function createWindow () {

  const window = new BrowserWindow({

    width: 1600,

    height: 900,

    webPreferences: {

      nodeIntegration: true

    }

  });

  window.loadFile('one.html');
  window.webContents.openDevTools();

}

app.whenReady().then(createWindow);