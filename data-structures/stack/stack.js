const back_button = document.getElementById("back_button");

back_button.addEventListener('click', () => {
    location.href = "../../index.html";
})

const stack_container = document.getElementById("stack-container");
const push_button = document.getElementById("push");
const pop_button = document.getElementById("pop");
let reset_button = document.getElementById("reset");

let stack = [];

// Create new element on push
push_button.addEventListener('click', (e) => {
    e.preventDefault();

    // if nothing is entered in input field, return
    if (!document.getElementById('input').value) return;

    const value = document.getElementById('input').value;
    const div = document.createElement('div');
    div.className = 'element';
    const h2 = document.createElement('h2');
    h2.innerHTML = value;
    div.appendChild(h2);
    stack_container.appendChild(div);
    stack.push(div);
    document.getElementById('input').value = '';
})

// Remove element on pop
pop_button.addEventListener('click', (e) => {
    e.preventDefault();

    if (stack.length == 0) return;

    const element = stack.shift();
    element.remove();
})

// Reset everything
reset_button.addEventListener('click', (e) => {
    e.preventDefault();


    document.getElementById('input').value = '';

    for (let i = 0; i < stack.length; i++) {
        stack[i].remove();
    }
    stack = [];
})
