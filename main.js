const {app, BrowserWindow} = require('electron')
  
function create() {
  browserWindow = new BrowserWindow({width: 800, height: 600})
  browserWindow.loadFile('index.html')
  browserWindow.webContents.openDevTools()
  browserWindow.on('closed', () => {
    browserWindow = null
  })
}
  
app.on('ready', create)

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if(browserWindow === null) {
		create()
	}
})
