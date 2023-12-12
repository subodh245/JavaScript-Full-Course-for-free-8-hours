// in dom traversal we'll gonna use following methods

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)

let element = document.querySelector("#fruit");
let child = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "yellow");