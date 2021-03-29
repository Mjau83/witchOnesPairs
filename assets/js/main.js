// Add a start game and end game function
// Add timer. Done. Make it work. Done
// Add score

  //List fo cards
  const cardArray = [
      {
          name: 'amethyst',
      },
      {
          name: 'amethyst',
      },
      {
          name: 'calcite',
      },
      {
          name: 'calcite',
      },
      {
          name: 'clear-quartz',
      },
      {
          name: 'clear-quartz',
      },
       {
          name: 'dreamcatcher',
      },
      {
          name: 'dreamcatcher',
      },
      {
          name: 'moon',
      },
      {
          name: 'moon',
      },
      {
          name: 'rose-quartz',
      },
      {
          name: 'rose-quartz',
      },
      {
          name: 'sage',
      },
      {
          name: 'sage',
      },
       {
          name: 'spring-flowers',
      },
      {
          name: 'spring-flowers',
      },
  ];
    cardArray.sort(() => 0.5 - Math.random());  
  
  const messageArray = [
      "111 Intuition - Litsen to you heart, your intuition is manifesting",
      "222 Alignmet - You are at the right place at the right time",
      "333 Support - Your spirit guides are around you",
      "444 Protection - You are protected by the universe",
      "555 Change - Change is comming your way, trust the process",
      "666 Reflect - It's time to reflectand reconnect with your spiritual truth",
      "777 Luck - Wonderful things are comming your way, keep it up",
      "888 Balance - Everything is falling into place",
      "999 Release - Let go of the what no longer serves you",
      "1111 - You are on the right path",
      "000 - It's time for new beginnings",
  ];
    messageArray.sort(() => 0.5 - Math.random());

  const gridRef = document.querySelector('#grid');
  const cards = document.querySelectorAll('.card');
  const resultDisplay = document.querySelector('#points');

  let tStarted=false;
  let timer;
  let timeLeft = 75;
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard;
  let secondCard; 
  let score = 0;
  
  
  // Game board
  cardArray.forEach((card => {
    let html = `<div class="col-3">
      <div class="card" data-framework="${card.name}">
        <img class="front-face img-fluid" src="assets/images/${card.name}.jpg" alt="Picture of ${card.name}">
        <img class="back-face img-fluid" src="assets/images/backside-image.jpg" alt="memory card backside">
      </div>
      </div>`;
    gridRef.insertAdjacentHTML("beforeEnd", html);
  }));

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
           // gridRef.startgame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', filpCard); 
    });
}
    // Timer code
function gameTimer(){
  tStarted=true;
  console.log("Game timer running");
  if(timeLeft < 0){
    clearInterval(timer);
  clearInterval(this.countdown);
  document.getElementById("game-over-text").classList.add('visible');
  } else {
    document.getElementById("time-left").innerHTML = timeLeft;
  }
  timeLeft -= 1;
}


// Code inspired from freeCodeCamp on YouTube
    // Flip card Code

function filpCard() {
    if(tStarted === false){
    tStarted = true;
    timer = setInterval(gameTimer,1000);
    console.log("first card, starts game timer");
  }
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
      firstCard.removeEventListener('click', filpCard);
      secondCard.removeEventListener('click', filpCard);
      resetBoard();
      score += 10;
      document.getElementById("points").innerHTML = score;
      // Change alert to toast. Done
      // Add an array of angel numbers that displays randomly for each match. Done
      Swal.fire({
      position: 'top-end',
      // Fix messageArray so it only shows one value
      text: [messageArray],
      showConfirmButton: false,
      timer: 2500
      });
     // if(cardArray.length === .length)
      winner();
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

function winner() {
    clearInterval(this.countdown);
    document.getElementById('winner-text').classList.add('visible');
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// End freeCodeCamp code 
