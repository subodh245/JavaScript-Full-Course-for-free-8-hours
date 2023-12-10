// anonymous objects = object without name 

class  Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    
    }
}

new Card("A","Heats");
new Card("A","spades");
new Card("A","Diamonds");
new Card("A","Clubs");
new Card("2","Heats");
new Card("2","spades");
new Card("2","Diamonds");
new Card("2","Clubs");


let cards = [new Card("A","Heats"),
             new Card("A","spades"),
             new Card("A","Diamonds"),
             new Card("A","Clubs"),
             new Card("2","Heats"),
             new Card("2","spades"),
             new Card("2","Diamonds"),
             new Card("2","Clubs")]


cards.forEach(card => console.log(`${card.value} ${card.suit}`))
 