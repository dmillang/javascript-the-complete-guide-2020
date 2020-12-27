const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
