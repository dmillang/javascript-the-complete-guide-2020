const task3Element = document.getElementById('task-3');
const functionType = 'WITH parameters';
const st1 = 'First sentence + ';
const st2 = 'Second sentence + ';
const st3 = 'Third sentence';

function noParamFunction() {
    alert('This is the alert in a function WITHOUT parameters');
}


function paramFunction(name) {
    alert('This is the alert in a function ' + functionType);
}

noParamFunction();
paramFunction(functionType);
task3Element.addEventListener('click', noParamFunction);

function stringFunction(st1,st2,st3) {
    const allStrings = st1 + st2 + st3;
    return allStrings;
}

const combinedString = stringFunction('Hello, ','this are ','three strings');
alert(combinedString);