// Add a start game and end game function
// Add timer. Done. Make it work
// Add score

var countDownDate = new Date("01:15").getTime();

var myfunc = setInterval(function() {
var now = new Date().getTime();
var timeleft = countDownDate - now;

var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementsByClassName("secs").innerHTML = seconds + "s " 
if (timeleft < 0) {
  clearInterval(myfunc);
  document.getElementsByClassName("secs").innerHTML = ""
  document.getElementsByClassName("end").innerHTML = "TIME UP!!";
}
}, 1000);

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