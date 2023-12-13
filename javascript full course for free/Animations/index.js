const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myAnimation");


myButton.addEventListener("click", begin);


function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;


    timerId = setInterval(frame,5);

    function frame(){
        if(y >= 200){
            clearInterval(timerId);
    
        }
        else{
            y+=1;
            myAnimation.style.top = y + "px";
        }
    }

}

