// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(2, 3);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Surf','Cooking'];
// const personalData = ['John', 34, {moreDetails: []}];

// const analyticsData = [[1,6],[-5.4,3.2]];

// for (const dataPoint of analyticsData) {
//   for (const data of dataPoint) {
//     console.log(data);
//   }
// }

// console.log(personalData[0]);

// const hobbies = ['Sports','Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// console.log(hobbies);
// console.log(poppedValue);
// const shiftedValue = hobbies.shift();
// console.log(hobbies);
// console.log(shiftedValue);
// hobbies[1] = 'Working';
// hobbies[5] = 'Sleeping'; // rarely used

// console.log(hobbies);
// hobbies.splice(0, 0, 'Dancing');
// console.log(hobbies);
// hobbies.splice(0,1);
// console.log(hobbies);
// hobbies.splice(-1,1); // start from the back
// console.log(hobbies);

// const testResults = [-2, 3.8, 50, -10, 36, 2.4];
// const partOftestResults = testResults.slice(-3,-1);

// const storedResults = testResults.slice();
// storedResults.push(70);

// console.log(testResults, partOftestResults, storedResults);


// const array = [8,7,6,3,4,5];
// const newArray = array.concat([6,7,8]);
// array.unshift(1,2);
// console.log(array);
// console.log(newArray);
// console.log(newArray.indexOf(8)); // expect 0
// console.log(newArray.lastIndexOf(8)); // expect 8
// console.log(newArray.includes(0)); // expect false
// console.log(newArray.includes(7)); // expect true

// const personData = [{name: 'John', age: 32}, {name: 'Mark', age: 24}];
// console.log(personData.indexOf({name: 'John'})); // doesn't work

// const mark = personData.find((person) => {
//   return person.name === 'Mark';
// });

// mark.name = 'Anna';

// console.log(personData);

// const age32 = personData.findIndex((person) => {
//   return person.age === 32;
// });

// console.log(age32);

const prices = [2.99, 1.99, 5.99, 9.99, 10.50];
const tax = 0.24;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  taxAdjustedPrices.push(priceObj.taxAdjPrice);
});

console.log(prices);
console.log(taxAdjustedPrices);