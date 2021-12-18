const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 750,
    title: "galhacode",
  });

  win.loadFile("./build/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
