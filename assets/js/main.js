// Add a start game and end game function
// Add timer. Done. Make it work. Done
// Add score

// Timer code
var timeleft = 75;
// Code inspired from Stackflow 
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time-left").innerHTML = "Change this.."; //to call the gameOver function
  } else {
    document.getElementById("time-left").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
// End Stackflow code

// Code inspired from freeCodeCamp on YouTube
const cards = document.querySelectorAll('.card');
const resultDisplay = document.querySelector('#points')

// Flip card Code
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard; 

function filpCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

  this.classList.add('flip');
  if(!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
  } else {
      hasFlippedCard = false;
      secondCard = this;

 // Match card code 
  if(firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener('click', filpCard)
      secondCard.removeEventListener('click', filpCard)
      resetBoard();
      alert("It's a match!")  //Change alert to a something that doesn't need to be clicked, and add individual messages for each match

    } else {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1500);
    }
  }  
}

function gameOver() {
      clearInterval(this.countdown);
      document.getElementById('game-over-text').classList.add('visible');
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function newBoard() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', filpCard));
// End freeCodeCamp code