// Code inspired from freeCodeCamp on YouTube
// Flip card Code
const cards = document.querySelectorAll('.card');

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