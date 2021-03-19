/* Code inspired from freeCodeCamp on YouTube */
const cards = document.querySelectorAll('.card');

function filpCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', filpCard));