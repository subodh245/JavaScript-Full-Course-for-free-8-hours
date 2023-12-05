// it is function without name /1


// sayHello();

// function sayHello(){
//     console.log("hello");
// }


// const greeting = function(){
//     console.log("hello");
// }

// greeting();

let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;

}

document.getElementById("decreeseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;

}