// date object is used to  display date and time 

 
let date = new Date();
// let date = new Date(2023,0,1,2,3,4,5,);
// let date = new Date("jenuary 1, 2023 00:00:00");


// let year = date.getFullYear();
// let dayOfMOnth = date.getDate();
// let dayOfweek = date.getMonth();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms    = date.getMilliseconds();

// date.setFullYear(2050);
// date.setMonth(12);
// date.setDate(22);
// date.setHours(12);
// date.setMinutes(1);
// date.setSeconds(30);
// date.setMilliseconds(0);



// date = date.toLocaleDateString();
document.getElementById("myLabel").innerHTML =  formatTime(date);



function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${month} /${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am"

    return `${hours}:${minutes}:${seconds}`
}
