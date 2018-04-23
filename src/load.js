const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const login = document.getElementById('login-button')

login.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'login.html')
    let win = new BrowserWindow(
    {
        frame: false,
        width: 400,
        height: 600
    })
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
})