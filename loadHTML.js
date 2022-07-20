console.log('loadHTML.js called')
const add = require("@gabrielachumba/html_analysis/html_analysis_addon.js")

window.onload=function(){
    const button = document.getElementById("loadHTML")
    console.log("button: ", button)
    button.addEventListener("click", (e) => {
        const result = add(2, 5)
        console.log("result: ", result)
    });
}