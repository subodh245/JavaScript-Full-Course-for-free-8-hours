// static = belong to the class , not the objetcts
//         properties: usefull for caches, fixed confuguration
//         method:     usefull for utility functon 


class Car{
    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    startRace(){
        console.log("3...2...1...Go!")
    }
}

const car1 = new Car("Mustang");
const car2 =  new Car("coveryyy");
const car3 = new Car ("Bmw");
const car4 = new Car ("frarri");
const car5 = new Car ("lambo");

car1.startRace();