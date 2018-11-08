'use strict'

import { app, protocol, BrowserWindow, Tray, Menu } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let tray

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 300, height: 450, frame: false })

  if (isDevelopment) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadFile('index.html')
  }

  win.on('close', (event) => {
    win.hide()
    event.preventDefault();
  })
  win.on('closed', () => {
    win = null
  })
}

function createTray() {
  tray = new Tray((path.join(__static, 'tomato01.png')))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '查看番茄钟', 
      type: 'normal',
      click() {
        win.show()
      }
    },
    {
      label: '设置', 
      type: 'normal',
      click() {
      }
    },
    {type: 'separator'},
    {
      label: '退出', 
      type: 'normal',
      click() {
          tray.destroy()
          app.quit()
      }
    }
  ])
  tray.setToolTip('小小🍅钟')
  tray.setContextMenu(contextMenu)
}

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools()
  }
  // create tray
  createTray()
  // create window
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
