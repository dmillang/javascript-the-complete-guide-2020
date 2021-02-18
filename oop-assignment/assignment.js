class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  calculateValue() {
    return this.value = (this.length/this.#price).toFixed(2);
  }

  printSummary() {
    console.log(`This ${this.title} course takes ${this.length} hours to complete and costs ${this.price}`);
  }
}

class PracticalCourse extends Course {
  constructor(title,length,price,num) {
    super(title, length, price);
    this.numOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  constructor(title,length,price,def) {
    super(title, length, price);
    this.definition = def;
  }
  publish() {
    console.log(`Learn all about ${this.definition} with the ${this.title} course`);
  }
}


const courseAngular = new Course('Angular',50,45.99);
const courseReact = new Course('React',30,99.99);

console.log(courseAngular);
console.log(courseReact);

console.log(courseAngular.calculateValue());
console.log(courseReact.calculateValue());

courseAngular.printSummary();
courseReact.printSummary();

const courseVue = new PracticalCourse('Vue',80,69.99,20);
console.log(courseVue);

const courseNgx = new TheoreticalCourse('Ngx',40,19.99,'new technology');
console.log(courseNgx);
courseNgx.publish();