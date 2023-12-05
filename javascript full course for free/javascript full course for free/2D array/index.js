// 2d array = arrays of array


let fruits = ["apple","orange","banana"];
let vegitable = ["carrots","onion","potatoes"];
let meats = ["egss","chiken","mutton","fish"];


let groceryList = [fruits,vegitable,meats];

groceryList[2][1]= "curry";


for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}