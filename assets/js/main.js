// Code inspired from freeCodeCamp on YouTube
// Flip card Code
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard; 

function filpCard() {
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
    } else {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
    }
  }  
}

cards.forEach(card => card.addEventListener('click', filpCard));