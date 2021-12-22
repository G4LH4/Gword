const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    title: "GWORD",
    autoHideMenuBar: true,
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
