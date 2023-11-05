 let username;

 document.getElementById("myButton").onclick = function () {

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylable").innerHTML = "Hello" + username

 }





 let age = window.prompt("how old are you?");
 console.log(typeof age);
 age = Number(age);
 age += 1;

 console.log("happy birthday you are ", age, "year old");



// typ converssion
let x;
let y;
let z;

x = Number("pizza");
y = Boolean("suboddh");
z = String(3.14);

console.log(x,typeof x);
console.log(y, typeof y);
console.log(z,typeof z);