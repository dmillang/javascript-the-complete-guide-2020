// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// const sayHello = (name) => {
//   console.log('Hi ' + name);
// };

// const sayHello = (txt, name) => {
//   console.log(txt + ' ' + name);
// };

// const sayHello = () => {
//   const txt = 'Greetings';
//   const name = 'David';
//   console.log(txt + ' ' + name);
// };

// const sayHello = (name, txt = 'hello') => {
//   return txt + ' ' + name;
// };

// let greeting = sayHello('Dave', 'Hi there');
// console.log(greeting);

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const string of strings) {
    if (!string) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log('All not empty');
  },
  'Hello',
  'there',
  'pack of',
  'strings'
);
