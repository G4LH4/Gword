const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 650,
  });

  win.loadFile("./build/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
