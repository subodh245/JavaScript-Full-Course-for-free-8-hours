// nested loop
let rows = window.prompt('enter rows');
let columns = window.prompt('enter columns');

for(let i=1; i<=rows; i+=1) {
    for(let j=1; j<=columns; j+=1) {
        document.getElementById("myrectangle").innerHTML += j
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}