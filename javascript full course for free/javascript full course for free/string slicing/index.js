let fullName = "subodh kamble";
let firstName;
let lastName;

// lastName = fullName.slice(6);
// firstName = fullName.slice(0,6);

firstName = fullName.slice(0,fullName.indexof(" "));
lastName =  fullName.slice(fullName.indexof(" ")+1);

console.log(lastName);
console.log(firstName);