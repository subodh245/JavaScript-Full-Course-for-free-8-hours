// add /change HTML elements

// two ways to add some text to h1 is
// .innerHTML (vunerable to XSS attaks)
//  .textContent (more secure)


// const nameTag = document.createElement("h1");
// nameTag.textContent= window.prompt("Enter your name");
// document.body.append(nameTag);



const myList  =  document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);         //this id for putting element in the middle of the list
myList.prepend(listItem);       // this is for putting elemnet in the middle of the list
myList.insertBefore(listItem,myList.getElementsByTagName("li")[3]); //this is for putting items in the middle of the list