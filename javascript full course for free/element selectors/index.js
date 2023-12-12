// element selectors = selecting elemets by class by name by id etc



let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightred";


let fruits = document.getElementById("fruits");


fruits.forEach(fruits => {
    if(fruits.checked){
        console.log(fruits.value)              // this is for blue mark on the options/radio button
    }
})         


let vagitables = document.getElementsByTagName("li");    //this is for getting element by tagname
vagitables[0].style.backgroundColor = "black"


let deaserts = document.getElementsByClassName("deaserts"); // this is for getting element by class name 
deaserts[1].style.backgroundColor = "red"

let title = document.querySelector("#myTitle");         //this selector can select all 
                                                        //   1)bytag 2)byclassname 