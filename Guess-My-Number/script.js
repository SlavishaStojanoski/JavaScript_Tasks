'use strict';

var randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// CHECK BUTTON Function on click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When the input is empty
  if (!guess) {
    document.querySelector('.message').textContent =
      'Enter Number Betwen 0 and 20';
    //   when the input number is corect(randomNUmber)
  } else if (guess === randomNumber) {
    // document.querySelector('.message').textContent = 'Corecr Number';
    displayMessage('Corect Number');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#69a100';
    document.querySelector('.number').style.fontSize = '6em';
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the inout isn't randomNumber (shorter with ternary operator)
  if (guess !== randomNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > randomNumber ? 'To High' : 'To Low';
      displayMessage(guess > randomNumber ? 'To High' : 'To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //     // when the input number is more then randomNumber
  //   } else if (guess > randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'To High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lose the game';
  //     }
  //     // when the input number is less then randomNumber
  //   } else if (guess < randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'To Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lose the game';
  //     }
  //   }
});

//RESET BUTTON, Again button, function for reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '5em';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //   document.querySelector('.highscore').textContent = 0;
});
