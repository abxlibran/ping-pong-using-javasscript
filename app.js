let player1Button = document.querySelector(".player-1-button");
let player2Button = document.querySelector(".player-2-button");
let player1Score = document.querySelector(".player-1");
let player2Score = document.querySelector(".player-2");
let pingPongMaxScore = document.querySelector("#pingpong");
let resetButton = document.querySelector(".reset");
let disableButton = document.querySelectorAll(".btn");
let selectedValue = 5;
let score1 = 0;
let score2 = 0;

player1Button.addEventListener("click", () => {
  let total = ++score1;
  player1Score.innerText = total;
  check(total, player1Button);
  pingPongMaxScore.classList.add('disable');
});

player2Button.addEventListener("click", () => {
  let total = ++score2;
  player2Score.innerText = total;
  check(total, player2Button);
  pingPongMaxScore.classList.add('disable');
});

const check = (value, button) => {
  if (value === selectedValue) {
    for (let i = 0; i < disableButton.length; i++) {
      disableButton[i].classList.add("disable");
    }
    button.classList.add("won");
    if (player1Button.classList.contains('won')){
        player1Score.classList.add('won');
        player2Score.classList.add('lost');
        
    } else {
        player1Score.classList.add('lost');
        player2Score.classList.add('won')
    }
  }
};

resetButton.addEventListener("click", () => {
  window.location.reload();
});

pingPongMaxScore.addEventListener("change", () => {
  selectedValue = parseInt(pingPongMaxScore.value);
});
