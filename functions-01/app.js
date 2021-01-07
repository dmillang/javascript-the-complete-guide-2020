const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
  console.log('Game is starting...');
}

start();

// const person = {
//   greet: function greet() {
//     console.log('Greet');
//   }
// }

// startGame();

startGameBtn.addEventListener('click', start);