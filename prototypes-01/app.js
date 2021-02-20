
// class agedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }


// class Person extends agedPerson {
//   name = 'Max';

//   constructor() {
//     super();
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

Person.prototype.printAge = function() {
    console.log(this.age);
}

const person = new Person();

console.dir(Person);

person.greet();
person.printAge();
console.log(person.__proto__);

const p2 = new person.__proto__.constructor();

console.log(p2);