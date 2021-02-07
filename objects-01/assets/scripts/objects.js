const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userChosenKeyName = 'level';
const userChosenValueName = '300';

const person = {
  "first name": "Max",
  age: 30,
  hobbies: ["sports","cooking"],
  greet: function() {
    console.log("Hi there!");
  },
  [userChosenKeyName]: userChosenValueName, 
  2.5: "hello",
}

// person.greet();

// console.log(person.isAdmin); // returns undefined

person.age = 31;

person.age = null; // reset
person.age = undefined; // dirty delete - do not use
delete person.age; // delete properly


person.isAdmin = true;

console.log(person);

const keyName = "first name";
console.log(person[keyName]);

console.log(person[1.5+1]);

let numbers = {2: "bye", 1: "hi"}; // will get sorted
console.log(numbers);