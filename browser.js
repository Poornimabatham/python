
function changeText(){
    fpara.textContent="goobbye poornima"
    fpara.style.background ='green'

}

let fpara = document.getElementById("fpara")
fpara.addEventListener('click',changeText)
// fpara.removeEventListener('click',changeText)

let link = document.getElementById("codehelp")
link.setAttribute("href","https://www.codehelp.in/")

function getAttributeValue(){

    let para = document.getElementById("demo")
    let tittilAttricute = para.getAttribute("title")

    alert("The value of the 'title' attribute is: " + tittilAttricute);

}

//create a new Element

var newElement= document.createElement("div")
newElement.textContent = "welcome to codeHelp"


var existingElement = document.getElementById("existingElement")

existingElement.insertAdjacentElement('beforebegin',newElement)