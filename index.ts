import { app, BrowserWindow } from 'electron';
import path from 'node:path';

let mainWindow: Electron.BrowserWindow | null;

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'helpers/preload.js')
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
