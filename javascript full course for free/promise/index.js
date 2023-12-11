// Promise = Object that encapsulate the result of an aynchronous opration 
//         and it promises to return value in the feature

// const promise = new  Promise((resolve,reject) => {
//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve ("File loaded");
//     }
//     else{
//         reject("File NOT loaded"); 
//     }
// });

// let fileLoaded = true;


const wait =time => new Promise(resolve => {
    setTimeout(resolve,time);

});

wait(3000).then(() => console.log("thanks for waiting"));