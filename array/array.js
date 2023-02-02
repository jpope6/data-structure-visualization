let array_container = document.getElementById('array_container');
let push_button = document.getElementById('push');

let array = [];
let index = 0;

// Create 10 elements for array
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = '0';
    div.className = 'box';
    div.appendChild(h1);
    array_container.appendChild(div);
    array.push(div);
}

push_button.addEventListener('click', () => {
    // Get the value from input
    let value = document.getElementById('value').value;
    array[index].children[0].innerHTML = value;
    index++;
})
