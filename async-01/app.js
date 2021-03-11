const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Button clicked!');
}

button.addEventListener('click', trackUserHandler);