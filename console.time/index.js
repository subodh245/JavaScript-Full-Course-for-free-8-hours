// console.time() = starts timer you can use to track how long an opration takes 
//                 give each timmer a unique name 

 
console.time("Response time");

alert("click the ok button");
setTimeout(() => console.log("HELLO"),3000);

console.timeEnd("Response time");