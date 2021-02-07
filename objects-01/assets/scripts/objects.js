const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const person = {
  "first name": "Max",
  age: 30,
  hobbies: ["sports","cooking"],
  greet: function() {
    console.log("Hi there!");
  }
}

// person.greet();

// console.log(person.isAdmin); // returns undefined

person.age = 31;

person.age = null; // reset
person.age = undefined; // dirty delete - do not use
delete person.age; // delete properly


person.isAdmin = true;

console.log(person);


console.log(person["first name"]);
