'use strict';
// Element selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

var x = 0;
var stepScore = 0;
var playerFlag = false;
var holdScorePlayer1 = 0;
var holdScorePlayer2 = 0;


// Drop the Dice
const diceValue = function() {
    x = Math.floor(Math.random() * 6 + 1)        
    document.querySelector('.dice').src=`dice${x}.png`;
    diceElement.classList.remove('hidden');
};

// Change player
function changePlayer() {
    playerFlag = !playerFlag;
        if (playerFlag === true) {
            player2.classList.add('player--active');
            player1.classList.remove('player--active');
        } else {
            player1.classList.add('player--active');
            player2.classList.remove('player--active');
        }
}

// Game start conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');


/*************************Listen function****************************/


// New game button
btnNewGame.addEventListener('click', function () {location.reload()})

// Drop dice button
btnRoll.addEventListener('click', function () {
    diceValue();
    if (x === 1) {
        score0Element.textContent = 0;
        stepScore = 0;
        changePlayer();
    } else {
        stepScore += x;
        if (playerFlag === false) {
            score0Element.textContent = stepScore;
        } else {
            score1Element.textContent = stepScore;
        };
        
    };
});

// Hold score button
btnHold.addEventListener('click', function() {
    if (playerFlag === false) {
        holdScorePlayer1 += stepScore;
        currentScoreP1.textContent = holdScorePlayer1;
        stepScore = 0;
        score0Element.textContent = stepScore;
        if (holdScorePlayer1 >= 100) {
            player1.classList.add('player--winner name');
        };
        changePlayer();
    } else {
        holdScorePlayer2 += stepScore;
        currentScoreP2.textContent = holdScorePlayer2;
        stepScore = 0;
        score1Element.textContent = stepScore;
        if (holdScorePlayer2 >= 100) {
            player2.classList.add('player--winner name');
        };
        changePlayer();
    };
});
