console.log('one.js called')
const path = require('path')
const { fileURLToPath } = require('url')
const __filename = fileURLToPath(import.meta.url);
console.log("__filename: ", __filename)
const __dirname = path.dirname(__filename);
console.log("__dirname: ", __dirname)
const { add } = require("@gabrielachumba/html_analysis/html_analysis_addon.js")
const result = add(2, 5)
console.log("result: ", result)

window.onload=function(){
    const button = document.getElementById("newWindow")
    console.log("button: ", button)
    button.addEventListener("click", (e) => {
        self.open(`file://${__dirname}/index.html`); 
    });
}

/* //window.onload=function(){

    

    let newWindowBtn = document.getElementById("newWindowBtn")
    if(newWindowBtn){
        newWindowBtn.addEventListener('click', function(event){

            const electron = require('electron');
            const BrowserWindow = electron.BrowserWindow;
            const path = require("path");
            const url = require("url");
            let winThree = new BrowserWindow();
            winThree.loadURL(url.format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file',
                slashes: true
            }));

            winThree.webContents.openDevTools();
            
        })

    }

//} */