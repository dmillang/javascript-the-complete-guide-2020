const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(2, 3);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Surf','Cooking'];
const personalData = ['John', 34, {moreDetails: []}];

const analyticsData = [[1,6],[-5.4,3.2]];

for (const dataPoint of analyticsData) {
  for (const data of dataPoint) {
    console.log(data);
  }
}

console.log(personalData[0]);