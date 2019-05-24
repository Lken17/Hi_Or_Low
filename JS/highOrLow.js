// Creat a card game called Higher Or Lower

//Build two arrays within an object that stores the suits and the numbers.

let deck = {
    suits: ["Clubs", "Hearts", "Diamonds", "Spades"],
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};

let cardsDrawn = [];

let card ;




//Create a function of two variables that pull a random element from the suits and cards arrays. 
function cardDraw(){
    let pickSuit = deck.suits[Math.floor(Math.random()* deck.suits.length)];
    let pickCard = deck.cards[Math.floor(Math.random()* deck.cards.length)];
    //log the results of the two random variables as a string
    card = (`${pickCard} of ${pickSuit}`);
    console.log(card);
    //push the card result to the empty array to store it. 
    cardsDrawn.push(card);
    console.log(cardsDrawn);
};

console.log(cardDraw());
/*
function checkHigher(){
    alert("yes!");

}


function checkLower(){

}


let testArray = [1,2,3,4,5,6,7,8,9,10];
let previousNum = [];
let numDrawn = 0;


function ranNum(){
    let numberDrawn= testArray[Math.floor(Math.random()* testArray.length)];
    numDrawn = numberDrawn;
    console.log(numDrawn);
    previousNum.push(numDrawn);
    console.log(previousNum);
}

console.log(ranNum());*/ 
