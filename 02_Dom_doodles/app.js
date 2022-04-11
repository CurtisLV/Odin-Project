const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');

redP.style.color = 'red';
redP.textContent = 'Hey I’m red!';

container.appendChild(redP);

//an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement('h3');

blueH3.style.color = 'blue';
blueH3.textContent = 'I’m a blue h3!';

container.appendChild(blueH3);

/* a <div> with a black border and pink background color with the following elements inside of it: */

const div = document.createElement('div');
div.style.border = '1px black solid';
div.style.backgroundColor = 'pink';

// another <h1> that says “I’m in a div”
const h1Div = document.createElement('h1');
h1Div.textContent = "I'm in a div";

// a <p> that says “ME TOO!”
const pMeToo = document.createElement('p');
pMeToo.textContent = 'ME TOO!';

//  Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

div.appendChild(h1Div);
div.appendChild(pMeToo);

container.appendChild(div);

//

const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

const btnX = document.querySelector('#btnX');
btnX.addEventListener('click', () => {
    alert('Hello World');
});

// using callback
btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
