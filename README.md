# BBC-BlackJack-Interview

Black Jack Game

## This is my very first attempt at coding a game in JavaScript!
The rules of Black Jack or 21s are that when the player starts the game they will have two cards and must not have a total score over 21. 
This total score is calulated by adding each of the cards value. Each card value is it's own number with exception to Jacks, Queens, Kings which are worth the score of 10,
and Aces which are worth the score of (1 or 11 begin the players choice).

The player must first click the START button to start the game,
then the player can then choose to get a new card by clicking the NEW CARD button or keep their collected cards by clicking the HOLD/STAND button which stops the player from clicking the NEW CARD button (then should of shown info message). 

When playing the game the game title Black jack (21s) is displayed, then the infomation messages (which is currently not working at the moment), 
then under this is the Cards output which shows all the cards the player's collected (Except for Jack, Queen, King all of which show 10, and Ace(shows either 1 or 11)),

then under this is the Total output which shows the sum of all the cards the player's collected in total,
and then under this is the three buttons START (starts the game with two cards), NEW CARD (Gives the player another card),
and HOLD/STAND (stops the player from collecting another card) which have also been mentioned above in more detail.

A workaround for the Jack, Queen, and King was to use a window alert that shows the player which card had been collected instead of just only seeing the number 10.

I decided to use a window prompt for the Ace because this allows the player to choose which score they want by either clicking yes or cancel.
This happens when the player clicks START or NEW CARD button and the Ace is picked from the randomised deck. 

When the Ace is collected the player will be given a prompt with 'Do you want Ace to be 11? OK for yes', 'yes',
this means that if the player wants the score of the Ace to be 11 then click the OK button or click cancel for the score to be 1.  
The prompt will only allow the input 'yes' in the text box and the Ok button clicked for the Ace score to equal 11. 
Any other input in the text box or otherwise will result in the Ace having the score of 1.

I have really enjoyed creating this game, and would like to do more (It's been interesting to state the least). 

## When testing this game I used Cypress and the unit test I completed was;
Given I play a game of blackjack, when I am dealt my opening hand, the player is then given two cards.

I have never done unit testing before and was having many problems getting Mocha, TinyTests, and Jest to work even before the testing. This is the reason I used Cypress because it worked for me. 
I wanted to see if I could test my project properly without any problems, and may have not follow a good naming convention. 
Upon the next unit test I will change all unit test in similar format to (When player starts the game, they're dealt two cards.) for clearer understanding.

I have not completed any other unit tests at the moment however I have done all the tasks.(Working however still with some current problems)

## Further information
This Black Jack game or 21s that I have coded is (or will be) a card game that is only playable with one player at the moment. 

This game does have some errors with it, with Microsoft Edge having the most issues, and it's best using this game in Google Chrome.
The two most common errors I have noticed are;
1, The NEW CARD button will not give player another card and the game stops being playable.
2, The NEW CARD button will not give player a Jack, Queen or King and the game stops being playable.

I split the paragraphs in this README.md up to help my reading.

If possible I will continue with is project.
