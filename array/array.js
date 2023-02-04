let array_container = document.getElementById('array_container');
let push_button = document.getElementById('push');

let array = [];
let index = 0;

// Create 10 elements for array
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    div.className = 'box';
    div.appendChild(h1);
    array_container.appendChild(div);
    array.push(div);
}

// Push button will add value to array
push_button.addEventListener('click', (e) => {
    e.preventDefault();

    // if nothing is entered in input field, return
    if (!document.getElementById('input').value) return;

    let value = document.getElementById('input').value;
    array[index].querySelector('h1').innerHTML = value;
    document.getElementById('input').value = '';
    index++;
})
