const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underwere",10] //maps
]);

store.get("t-shirt"); //to add item in map 
store.set("hat",40);  // to set value of hat to maps 
store.delete("hat"); // for deleting the pair
console.log(store.has("hat")); // for chekking if we havd the item or not
console.log(store.size); //to print the number of item in our mappsss



// shopingCart += store.get("t-shirt"); //here i have used get method to put items in shopping cart and print the payable amount 
// shopingCart += store.get("socks");
// console.log(shopingCart);

store.forEach((value,key) => console.log(`${key} $${value}`));