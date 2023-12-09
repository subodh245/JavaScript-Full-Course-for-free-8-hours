

const car = {
    model:"Mustang",       //
    color:"red",           // this is properties 
    year:2023,             //
  
    drive:function(){
        console.log(`you drive the car ${this.model}`);     //                  
    },                                        //        
    brake : function () {                     //     this is methods             
        console.log("you step on the breke"); //               
    }
}

const car2 = {
    model:"corvate",       //
    color:"black",           // this is properties 
    year:2050,             //
  
    drive:function(){
        console.log(`you drive the car ${this.model}`);     //                  
    },                                        //        
    brake : function () {                     //     this is methods             
        console.log("you step on the breke"); //               
    }
}

//for car 2 
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();



console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();