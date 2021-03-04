const buttons = document.querySelectorAll('button');

// button.onclick = () => {
//   alert('choto mate');
// }

const buttonClickHandler = event => {
  console.log(event);
  // event.target.disabled = true;
  event.target.style.opacity = '20%';
};

// const anotherButtonClickHandler = () => {
//   console.log('hello again');
// };

// const allHandlers = function() {
//   anotherButtonClickHandler();
//   buttonClickHandler();
// }
// button.onclick = allHandlers;

// button.addEventListener('click', anotherButtonClickHandler);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', buttonClickHandler);
})

window.addEventListener('scroll', event => {
  console.log(event);
})