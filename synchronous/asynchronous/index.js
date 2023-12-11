// synchronous code = in an orderd sequence 
//                     step by step  linear instruntions
//                      (start now, finish now )
                     
// asynchronous code = out of sequence 
//                     Ex. Access a database fetch a file 
//                     tasks that take time 
//                     (start now finish sometime )


// this is asynchronous
console.log("start");
setTimeou(() => console.log("this is asynchronous"),5000);
console.log("end");

// this is synchtonous

console.log("start");
console.log("this step is synchronous");
console.log("END")