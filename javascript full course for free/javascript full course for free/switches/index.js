// switches is alternative of if else statement but it is 
// more efficirant and can be use to match many case clauses

// practicing with charectors
let grade = "A";

switch(grade) {
    case "A":
        console.log("you did great");
        break;

    case "B":
        console.log("you did good");
        break;

    case "C":
        console.log("you did okay");
        break;

    case "D":
         console.log("you passed ...barely");
         break;

    case "e":
        console.log("you failed");
        break;

    default:
        console.log(grade,"is not a letter grade")
}


// practicing with numbers

let marks = "100";

switch(true) {
    case marks >= 90:
        console.log("you did great");
        break;

    case marks >= 80:
        console.log("you did good");
        break;

    case marks >= 70:
        console.log("you did okay");
        break;

    case marks >= 60:
         console.log("you passed ...barely");
         break;

    case marks < 60:
        console.log("you failed");
        break;

    default:
        console.log(grade,"is not a letter grade")
}

