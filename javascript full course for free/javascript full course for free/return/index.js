// return = it returns value back to palace where you invoked a function 
 
let area;
let width;
let height;


width = window.prompt("enter width");
height = window.prompt("enter value");

area= getArea(width,height);

console.log('the area is ', area);


function getArea(width,height){
    let result = width * height;
    return result;

}