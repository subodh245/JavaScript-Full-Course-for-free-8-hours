// super = it reffers to partnt class  
        //    commanly used to invok constructor of a parent class

class Animal{

    constructor(name,age){
        this.name= name;
        this.age= age;
    }
}

class Rabbit extends Animal {
    constructor(name, age , runSpeed){
        super(name ,age)
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age , swimSpeed){
        super(name ,age)
        this.runSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age , flySpeed){
        super(name ,age)
        this.runSpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit",1,40);
const fish = new Fish("rabbit",4,122);
const hawk = new Hawk("rabbit",6,2083);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);