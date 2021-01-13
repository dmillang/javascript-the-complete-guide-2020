const body = document.body;

body.style.backgroundColor = '#f7f7f7';

const h1 = document.querySelector('h1');

h1.innerText = 'New title added via app.js'
h1.style.color = 'white';
h1.style.backgroundColor = '#000';

const lastLi = document.querySelector('li:last-of-type');
lastLi.style.color = 'red';

const listItems = document.querySelectorAll('li');
let i = 1;

for (const listItem of listItems) {
  listItem.innerText = 'Item ' + i;
  i += 1;
}