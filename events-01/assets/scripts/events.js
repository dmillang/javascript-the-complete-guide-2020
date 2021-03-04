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

button.addEventListener('click', buttonClickHandler);
button.addEventListener('click', anotherButtonClickHandler);
// button.removeEventListener('click', buttonClickHandler);