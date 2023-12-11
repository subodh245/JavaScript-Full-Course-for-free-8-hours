// await function = it can stop a function to run for sometime 


function loadFile(){
    if (FileLoaded){
        return "file is loded"
    }
    else {
        throw "file not loaded"
    }
}




loadFile().then(value => console.log(value))
          .catch(error => console.log(error));