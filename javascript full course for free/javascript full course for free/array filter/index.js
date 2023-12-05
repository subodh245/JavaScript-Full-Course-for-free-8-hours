let ages = [18,16,12,3,44,56,34];

let adults = ages.filter(chekAge);
adults.forEach(print);



function chekAge(element){
    return element >= 18;
}

function print (element){
    console.log(element)
}