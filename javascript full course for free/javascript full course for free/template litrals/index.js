let username = "subodh";
let items =3;
let total = 75;


// console.log("HELLO!",username);
// console.log("you have",items,"items in your cart");
// console.log("your total is $",total);


// console.log(`HELLO ${username}`);
// console.log(`you have ${items} items in your cart`);
// console.log(`your total is ${total}`);




let text = 
`HELLO ${username}
you have ${items} items in your cart
your total is ${total}`;

// console.log(text)


document.getElementById("mylabel").innerHTML = text;