const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.commandLine.appendSwitch('disable-gpu-compositing');
app.disableHardwareAcceleration();


function createWindow() {
  const win = new BrowserWindow({
    title: "My little calendar",
    width: 320,
    height: 380,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    backgroundColor: "#00000000",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableBlinkFeatures: "CSSCustomProperties"
      }
  });

  win.loadFile("index.html");
}
ipcMain.on('window-control', (event, action) => {
  const win = BrowserWindow.getFocusedWindow();
  if (!win) return;

  if (action === 'minimize') win.minimize();
  if (action === 'close') win.close();
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") 
    {app.quit();}
});

