// class = it helps in creatin objects  
    
// how to use classes 
// define what properties and method we have 
// and use a constructor for unique properties

class player {                                       //              
    score = 0;                                       //                         
                                                     //              
    pause(){                                         //   class                            
        console.log("you have pause the game ");     //                             
                                                     //                 
    }                                                //                                    
                                                     //                                              
    exit(){                                                                     
        console.log("you have exit the game ");
    }
}


const player1 = new player();
const player2 = new player();      //     objects                                               
                                                  
player1.score += 1;
player2.score += 7;                                           
  
                                                      
console.log(player1.score);                                                  
console.log(player2.score);


player1.pause();
player2.exit();
