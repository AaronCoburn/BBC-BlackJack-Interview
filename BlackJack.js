/// Create Black Jack game || 21s

//1, create a deck
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

//2, create var for  1st & 2nd card each fristCard + secCard //[fristCard, secCard] + " "
// let fristCard = ""
// let secCard = ""
let playerCards = []
let totalHand = 0
let bj = false
let gameIsAlive = false
//3, create a starting hand var
 
let info = ""
console.log(totalHand)

// store message info var
let infoEl = document.getElementById("info-el")

let cardsEl = document.getElementById("card-el")
let totalHandEl = document.getElementById("totalhand-el")
let endGameEl = document.getElementById("endGame-el")

infoEl.textContent = info
function randomCard(){ 
    let randomNum = Math.floor(Math.random() * deckCard.length) 
    if (deckCard[randomNum] === 1){
    let chooseAce = window.prompt('Do you want Ace to be 11? OK for yes', 'yes')
    if (chooseAce === 'yes'){
        return 11
    }else{
        return 1
    }
    }else if (deckCard[randomNum] > 10){
        return 10
    }else{
        return deckCard[randomNum]
    }
  
 }
    // totalHandEl.textContent = "Total: " + totalHand 
    // cardsEl.textContent = "Cards: " + playerCards[0] + " " + playerCards[1]
//4, create rules for game
function startGame(){
    gameIsAlive = true
    let fristCard = randomCard()
    let secCard = randomCard()
    playerCards = [fristCard, secCard]
    totalHand = fristCard + secCard
    renderGame()
}
function renderGame() {
    // let  
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < playerCards.length; i++){
    cardsEl.textContent += playerCards[i] + " "
    }
     totalHandEl.textContent = "Total: " + totalHand
 
    if (totalHand <= 20){
        info = "Would you like to draw a card?"
        gameIsAlive = true
    } else if (totalHand === 21 ){
        info = "BJ!"
        bj = true
    }else{
        info = "Bust"
        gameIsAlive = false
    }
    
    
}//Random card generator

function holdStand(){
    endGame()
    return totalHand
    
}

function newCard(){
    if (gameIsAlive === true && bj === false){
    console.log("new card")
    let addCard = randomCard()
    totalHand += addCard
    playerCards.push(addCard)
    renderGame()
    }
}

function endGame(){
    gameIsAlive = false
    endGameEl.style.visibility="visible" 
    console.log(endGame)

}
//5, create info func that changes input

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

