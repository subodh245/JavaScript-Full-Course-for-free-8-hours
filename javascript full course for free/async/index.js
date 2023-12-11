
async function loadFile(){
    
        let fileLoaded = true;
        if(fileLoaded){
            return "File load File load File load File loadFile load";
        }
        else{
            throw "File NOT loaded File NOT loadedFile NOT loadedFile NOT loadedFile NOT loaded"; 
        }
    

}




loadFile().then(value => console.log(value))
       .catch(error => console.log(error));