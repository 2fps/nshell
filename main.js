// Modules to control application life and create native browser window
const {app, Menu, BrowserWindow, ipcMain} = require('electron')
const path = require("path")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: false, // 不集成 Nodejs
      webSecurity: false,
      preload: path.join(__dirname, './public/renderer.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
    }
  })

  // 显示控制台
  mainWindow.webContents.openDevTools()

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000/')
  // mainWindow.loadURL(path.join('file://', __dirname, '/public/index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var template = [
  {
    label: '关闭',
    click: function () { win.close();console.log("关闭")},
    // submenu: [
    //   {
    //     label: 'Undo',
    //     accelerator: 'CmdOrCtrl+Z',
    //     role: 'undo'
    //   }
    // ]
  }]
var menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu);

ipcMain.on('somemsg', (evt, data) => {
  console.log(data)
});