document.getElementById("submitButton").onclick = function(){

    let temp

    if(document.getElementById("cButten").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp +"°C";
    }
    else if(document.getElementById("fButten").checked){

    }
    else{
        document.getElementById("tempLabel").innerHTML = "select a unit";
    }

}

 

function toCelsius(temp){
    return (temp - 32) * (5/9);

}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
    
}