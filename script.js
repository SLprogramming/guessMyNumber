'use strict';
let answer = Math.ceil(Math.random() * 20);
console.log(answer);
//taking from DOM
const guessBox = document.querySelector('.guess');
const checkBox = document.querySelector('.check');
const Score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const playAgain = document.querySelector('.again');
const number = document.querySelector('.number');

//play again button handling
playAgain.addEventListener('click', () => {
  playAgainFunction();
});
//check Box handling
checkBox.addEventListener('click', () => {
  //taking guest value as number
  const guestNumber = Number(guessBox.value);
  //return If guest box is empty
  if (guessBox.value === '') {
    return;
  }
  //guest value must be 1 t0 20
  if (guestNumber > 20 || guestNumber < 1) {
    alert('number must be between 1 to 20');
    guessBox.value = '';
    return;
  }
  //correct answer handle
  if (guestNumber === answer) {
    message.innerHTML = '🎉Correct Number';
    number.innerHTML = answer;
    document.querySelector('body').style = 'background-color:#60b347;';
    //replace score as highscore
    if (Number(highScore.innerHTML) < Number(Score.innerHTML)) {
      highScore.innerHTML = Score.innerHTML;
    }
    return;
  } else {
    //handle If answer is incorrect
    message.innerHTML = `${guestNumber < answer ? '📉too low' : '📈 too high'}`;
    Score.innerHTML = Number(Score.innerHTML) - 1;
  }

  if (Number(Score.innerHTML) === 0) {
    alert('💥You lose, good luck for next time');
    playAgainFunction();
  }
});

//function for play again
const playAgainFunction = () => {
  answer = Math.ceil(Math.random() * 20);
  console.log(answer);
  Score.innerHTML = '20';
  message.innerHTML = 'Start guessing...';
  guessBox.value = '';
  document.querySelector('body').style = 'background-color:#222;';
  number.innerHTML = '?';
};
