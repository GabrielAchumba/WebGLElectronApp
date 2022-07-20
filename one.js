console.log('one.js called')
const path = require('path')
const { fileURLToPath } = require('url')
const __filename = fileURLToPath(import.meta.url);
console.log("__filename: ", __filename)
const __dirname = path.dirname(__filename);
console.log("__dirname: ", __dirname)
const { add, readHTMLFile } = require("gabrielachumba_html_analysis/html_analysis_addon.js")
const html = `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>WebGL Demo</title>
  <link rel="stylesheet" href="./webgl.css" type="text/css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
    integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
    crossorigin="anonymous" defer>
    </script>
  <script src="webgl-demo.js" defer></script>
</head>

<body>
  <button id="loadHTML">Load HTML File</button>
  <script type="module" src="./loadHTML.js">
</script>
  <canvas id="glcanvas" width="640" height="480"></canvas>
</body>

</html>`
const result = add(2, 5)
console.log("result: ", result)
const result2 = readHTMLFile(html)
console.log("result2: ", result2)

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