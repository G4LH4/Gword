const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 750,
    title: "GWORD",
    autoHideMenuBar: true,
    backgroundColor: "#2e2c29",
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
