// for reducing array to a single value


let prices = [5,5,15,10,145,1000450]; //ittems pricces in a shopping cart 
let total = prices.reduce(checkOut);


console.log(`the total is $ ${total}`);


function checkOut(total,element){
    return total + element;
}