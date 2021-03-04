const button = document.querySelector('button');

// button.onclick = () => {
//   alert('choto mate');
// }

const buttonClickHandler = () => {
  alert('hi there');
};

const anotherButtonClickHandler = () => {
  console.log('hello again');
};

// const allHandlers = function() {
//   anotherButtonClickHandler();
//   buttonClickHandler();
// }
// button.onclick = allHandlers;

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);
// button.addEventListener('click', anotherButtonClickHandler);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);
