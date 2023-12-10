// error handling = object with a description Of 
//                     somthing went wrong 



try {
     let x = window.prompt("Enter a #");
     x = Number(x);

     if(isNaN(x)) throw "that wasnt a number!";
     if(x == "") throw "that was empty!";
     console.log(`${x} is number`);
}
catch(error){
    console.log(error);
}

finally{
    console.log("this alwayys exicutes");
}

        