// setTimeout() = invokes a funcition after a number of milliseconds
//                asyncchronoumas function (dosent paus execution)

let item = "cryptocurency";
let price = 420.69;

let timer1 = setTimeout(firstMassage,3000,item,price);
let timer2 = setTimeout(secondMassage,6000);
let timer3 = setTimeout(thirdMassage,9000);

function firstMassage(){
    alert(`buy this coarse for $500!`);
}

function secondMassage(){
    alert(`this is not a scam!`);
}

function thirdMassage(){
    alert(`Do ITT!`);
}


document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

}