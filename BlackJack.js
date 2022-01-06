/// Create Black Jack game || 21s

// Starting this project by creating a deck to use in the BlackJack game.
//1, create a deck array variable, this will be used later with Math.random.
let deckCard = [1, 1, 1, 1,
                2, 2, 2, 2, 
                3, 3, 3, 3, 
                4, 4, 4, 4, 
                5, 5, 5, 5,
                6, 6, 6, 6,
                7, 7, 7, 7, 
                8, 8, 8, 8,
                9, 9, 9, 9, 
                10, 10, 10, 10,
                11, 11, 11, 11, 
                12, 12, 12, 12,
                13, 13, 13, 13]

//2, create variables for 1st & 2nd card each fristCard + secCard that will be used at the start of the game when Start button Clicked.
// let fristCard = ""
// let secCard = ""
//3 create a variable for showing each card the player collects in the game. Making sure to include firstCard and secondCard when Start button pressed since will be frist two cards.
let playerCards = [] // Before start of game keep value to Null.
//4 create a variable for counting the total of all cards.
let totalHand = 0 // Before start of game keep value to 0.
//5 create a varible to check if the player has cards for BlackJack. 
let bj = false // Before start of game keep value to Null.
// 6 create a varible to check if player is in the game. Allowing a start and end for the game. 
let gameIsAlive = false // Before start of game keep value to False.
// 7, create a varible to give infomational message to help players next input. This is use to change the info-el HTML document content.
let info = "" // Before start of game keep value to Null.
console.log(totalHand)

// 8 Store the HTML elements infomation into variables for adjusting content.
let infoEl = document.getElementById("info-el")

let cardsEl = document.getElementById("card-el")
let totalHandEl = document.getElementById("totalhand-el")
let endGameEl = document.getElementById("endGame-el")

infoEl.textContent = info

// 9 Create a function for making the numbers of the cards random. 
function randomCard(){ 
    let randomNum = Math.floor(Math.random() * deckCard.length) //Create a varaiable and assign it the Math.random function then times it by the deck created using the floor to ignore any number after the decimal place.
   // Use an if statment to control what happens when the number of the card is an Ace (1), Jack(11), Queen(12) or a King(13).
    if (deckCard[randomNum] === 1){
    let chooseAce = window.prompt('Do you want Ace to be 11? OK for yes', 'yes') // If number of card is 1 then give window prompt asking if want Ace to be 11 or 1, Yes = 11.
    if (chooseAce === 'yes'){ 
        return 11
    }else{
        return 1
    }
    }else if (deckCard[randomNum] > 10){ // If number of card is higher than 10 then return the number 10.
        return 10
    }else{
        return deckCard[randomNum] // If none of the above conditiona apply then return the number randomised from Math.random.
    }
  
 }
    // totalHandEl.textContent = "Total: " + totalHand.
    // cardsEl.textContent = "Cards: " + playerCards[0] + " " + playerCards[1].

// 10, Create a function for starting the game when the Start Button is clicked. This starts the game with 2 cards.
function startGame(){
    gameIsAlive = true //This states the player is now currently playing the game.
    let fristCard = randomCard() //Storse players 1st random card in variable.
    let secCard = randomCard() //Storse players 2nd random card in variable.
    playerCards = [fristCard, secCard] // Stores both 1st and 2nd cards into the variable. 
    totalHand = fristCard + secCard // Stores both 1st and 2nd cards total value into the variable.
    renderGame() // Runs this function to update the scores and game logic.
}

// 11, Create a function to render the games content and check if game is still playable.
function renderGame() {
    // Using variable declared above reassign content to match the cards the player is playing the game with.  
    cardsEl.textContent = "Cards: " // reassigning this first, then using a for loop to assign each new random card the player collects.
    for (let i = 0; i < playerCards.length; i++){
    cardsEl.textContent += playerCards[i] + " "
    }
     totalHandEl.textContent = "Total: " + totalHand // Using the same method above reassign content to display the total sum of players cards. The only difference is only add and update one instead of assigning one after each other.
 // 12, Create am if statement that controls the outcome of the game. When player total is less than or eqaul to 20 the player is still in game, if player total strictly eqauls 21 then display BlackJack and put bj to true, and if player total anything else meaning over or error then display bust and end the game.
    if (totalHand <= 20){
        info = "Would you like to draw a card?"
        gameIsAlive = true
    } else if (totalHand === 21 ){
        info = "BlackJack!"
        bj = true
    }else{
        info = "Bust"
        gameIsAlive = false
    }
    
    
}
// 13, Create a function for when the player clicks the Hold button it allows the player to hold and end the game.  
function holdStand(){
    endGame()
    return totalHand
    
}
// 14, Create a function for when the player clicks the NewCard button it allows the player to collect a new card.
function newCard(){
    if (gameIsAlive === true && bj === false){
    console.log("new card")
    let addCard = randomCard()
    totalHand += addCard
    playerCards.push(addCard)
    renderGame()
    }
}
// 15, Create a function for when the players game has now ended and display message. This is still currently being worked on.
function endGame(){
    gameIsAlive = false
    endGameEl.style.visibility="visible" 
    console.log(endGame)

}
//5, create info func that changes input.

// module.exports = {
//     cardsEl,
//     infoEl,
//     playerCards,
//     totalHand,
//     randomCard,
//     startGame,
//     renderGame,
//     holdStand,
//     newCard

// };

