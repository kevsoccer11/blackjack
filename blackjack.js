let allCards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let gameOver = document.getElementById("game-over");
let lost = "Game over. You lost!!";
let winner = "Game over. You WON!!";
let player = {
    name: "Frank",
    chips: 150,

}
let playerInfo = document.getElementById("player-el");
playerInfo.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10;
    }
    else if (randomNum === 1) {
        return 11;
    }
    else { return randomNum; }

}
function startGame() {
    isAlive = true;
    let cardOne = getRandomCard();
    let cardTwo = getRandomCard();
    allCards = [cardOne, cardTwo];
    sum = cardOne + cardTwo;
    gameOver.textContent = "";
    renderGame();
}
function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < allCards.length; i++) {
        cardEl.textContent += allCards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw another card?";
    }
    else if (sum === 21) {
        message = "BLACK JACK!! You win!! Would you like to play again?";
        gameOver.textContent = winner;
        blackJack = true;
    }
    else {
        message = "You lost! Better luck next time. Would you like to play again?";
        gameOver.textContent = lost;
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

}
function newCard() {
    if (isAlive === true && blackJack === false) {
        let anotherCard = getRandomCard();
        sum += anotherCard;
        allCards.push(anotherCard);
        renderGame();
    }
}
function newGame() {
    allCards = [];
    sum = "";
    blackJack = false;
    isAlive = false;
    messageEl.textContent = "Start new game when ready.";
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;
    gameOver.textContent = "";
}
