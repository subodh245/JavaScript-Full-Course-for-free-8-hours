let a;
let b;
let c;

// a = window.prompt("enter side a");
// a = Number(a);


// b = window.prompt("enter side B");
// b = Number(b);


// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = math.sqrt(c);

document.getElementById ('submitbutton'). onclick = function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("clabel").innerHTML = "Side c:" + c;
}