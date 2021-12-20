const { app, BrowserWindow, globalShortcut } = require("electron");

const fs = require("fs");

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
  // useSaveFiles();
});

// const useSaveFiles = () => {
//   globalShortcut.register("CommandOrControl+S", () => {
//     fs.writeFile("Document", "a", (err) => {
//       if (err) console.log(err);
//     });
//   });
// };
