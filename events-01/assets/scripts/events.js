const button = document.querySelector('button');

// button.onclick = () => {
//   alert('choto mate');
// }

const buttonClickHandler = (event) => {
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

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// })

// window.addEventListener('scroll', event => {
//   console.log(event);
// })

// let curElementNumber = 0;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('button').parentElement;

div.addEventListener('click', (event) => {
  console.log('clicked div');
  console.log(event);
});

button.addEventListener('click', (event) => {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log('clicked button');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
});

