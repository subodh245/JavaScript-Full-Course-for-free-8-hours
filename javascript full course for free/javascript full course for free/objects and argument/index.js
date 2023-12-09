class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color;

    }
}

const car1 = new Car ("mustang",2023, "red",);
const car2 = new Car ("gt",2023, "blcak",);
const car3 = new Car ("mustang",2023, "white",);


changeColor(car3, "gold");
displayInfo(car3);


function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
    

    
}