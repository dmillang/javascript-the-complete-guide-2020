// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(`Hi my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

function Person() {
  this.name = 'Max';
  this.age = 30;
  this.greet = function() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
}

const person = new Person();

console.dir(Person);

person.greet();
person.printAge();
console.log(person.__proto__ === Person.prototype);