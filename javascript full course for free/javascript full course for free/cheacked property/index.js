

document.getElementById("myButten").onclick = function() {
    const checkbox = (document.getElementById("myCheckBox")); 
    const visaBtn = (document.getElementById("visaBtn"));
    const masterCard = (document.getElementById("masterCard"));
    const paypalBtn = (document.getElementById("paypalBtn"));

    if (checkbox.checked) {
        console.log("you are subscribed");
    }
    else{
        console.log("you are not subscribe");
    }

    if(visaBtn.checked){
        console.log("your paying with visa");
    }
    else if(masterCard.checked){
        console.log("you are paying with master card");
    }
    else if(paypalBtn.checked){
        console.log("you are paying with paypal")
    }
}