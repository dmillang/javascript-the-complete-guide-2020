const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(
    `randomNumber is bigger than 0.7 [randomNumber: ${randomNumber.toFixed(2)}]`
  );
  console.log(`randomNumber = ${randomNumber.toFixed(2)}`);
} else {
  console.log(`randomNumber = ${randomNumber.toFixed(2)}`);
}

/**********************/

const counter = 10;
let numbersArray = [];

for (let i = 0; i < counter; i++) {
  const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
  numbersArray.push(randomNumber.toFixed(2));
}

console.log('--------------------');

console.log(numbersArray);

console.log('--------------------');

for (let i = 0; i < numbersArray.length; i++) {
  console.log(`${i + 1}) ${numbersArray[i]}`);
}

console.log('--------------------');

i = 0;
for (const iterator of numbersArray) {
  console.log(`${i + 1} is ${iterator}`);
  i++;
}

/**********************/

console.log('--------------------');

for (i = numbersArray.length - 1; i >= 0; i--) {
  console.log(`${i + 1}) ${numbersArray[i]}`);
}

/**********************/
console.log(`randomNumber is ${randomNumber}`);
console.log(`secondRandomNumber is ${secondRandomNumber}`);

if (
  (randomNumber > 0.7 && secondRandomNumber > 0.7) ||
  randomNumber < 0.2 ||
  secondRandomNumber < 0.2
) {
  alert('Greater than 0.7 or not greater than 0.2');
} else {
  alert('No condition is met');
}
