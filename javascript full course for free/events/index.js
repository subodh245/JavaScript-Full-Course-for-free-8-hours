

// const element = document.getElementById("myButton");
// const element = document.body;
const element = document.getElementById("myText");


// element.onclick = doIt
// element.onload = doIt;
// Element.onchange = doIt;
element.onmouseover = doIt;
element.onmouseout = doelse;  
// element.onmousedown = doIt;
// element.onmouseup = doelse;




function doIt() {
    // alert("you did it");
    element.style.backgroundColor = "black";
}

function doelse(){
    element.style.backgroundColor = "red"
}