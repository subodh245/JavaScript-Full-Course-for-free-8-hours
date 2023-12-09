// constructor = speacial method of class
//                it accept argument and assigns proprties


class student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log (`${this.name } is studing`)
    }

}

const student1 = new student("subodh",18,10);
const student2 = new student("sumedh",16,10);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();


console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();