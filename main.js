const { app, BrowserWindow } = require("electron");
//import { app, BrowserWindow } from "electron";

let win;

function createWindow(){
    /* winOne = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    }); */

    win = new BrowserWindow({
        width: 1000, 
        height: 800,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadURL(`file://${__dirname}/one.html`);
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });

    win.webContents.on(
        "new-window",
        (_event, _url, _frameName, _disposition, options, _additionalFeatures) => {
            Object.assign(options, {
                parent: win,
                modal: true,
            })
        }
    )
}

app.whenReady().then(createWindow).catch(console.error);
//app.on('ready', createWindow);

/* app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if(process.platform != 'darwin') {
        app.quit()
    }
}) */

/* app.on('activate', () => {
    if(winOne === null) {
        createWindow()
    }
}) */

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })