// setInterval() = invokes a function repetedly after a number of milliseconds...repetedly............................
                //    asynchronous function (doesnt pause execution )



let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);


const myTimer = setInterval(countUp,1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}