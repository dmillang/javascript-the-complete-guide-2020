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

const hobbies = ['Sports','Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
console.log(hobbies);
console.log(poppedValue);
const shiftedValue = hobbies.shift();
console.log(hobbies);
console.log(shiftedValue);
hobbies[1] = 'Working';
// hobbies[5] = 'Sleeping'; // rarely used

console.log(hobbies);
hobbies.splice(0, 0, 'Dancing');
console.log(hobbies);
hobbies.splice(0,1);
console.log(hobbies);
hobbies.splice(-1,1); // start from the back
console.log(hobbies);