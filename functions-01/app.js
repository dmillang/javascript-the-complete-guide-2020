const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomNum = Math.random();

  if (randomNum < 0.34) {
    return ROCK;
  } else if (randomNum < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// const getWinner = function (pChoice, cChoice) {
//   if (pChoice === cChoice) {
//     gameIsRunning = false;
//     return RESULT_DRAW;
//   } else if (
//     (pChoice === ROCK && cChoice === SCISSORS) ||
//     (pChoice === PAPER && cChoice === ROCK) ||
//     (pChoice === SCISSORS && cChoice === PAPER)
//   ) {
//     gameIsRunning = false;
//     return RESULT_PLAYER_WINS;
//   } else {
//     gameIsRunning = false;
//     return RESULT_COMPUTER_WINS;
//   }
// };

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return; // avoid starting new game is we click the button by mistake
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `PLAYER: ${
    playerChoice || DEFAULT_USER_CHOICE
  } | COMPUTER: ${computerChoice} ----> YOU `;
  if (winner === RESULT_DRAW) {
    message += 'DRAW';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'WIN';
  } else {
    message += 'LOST';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let result = 0;
  if (operation === 'SUM') {
    for (const num of numbers) {
      result += validateNumber(num);
    }
  } else {
    for (const num of numbers) {
      result -= validateNumber(num);
    }
  }
  resultHandler(result);
};

// const substractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'SUM',
  'dsfas',
  59,
  -20,
  6
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'SUM',
  70,
  120,
  34,
  62,
  29
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  3,
  5,
  6,
  8
);
