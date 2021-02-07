const person = {
  name: "Max",
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

