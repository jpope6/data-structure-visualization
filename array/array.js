let array_container = document.getElementById('array_container');
let push_button = document.getElementById('push');
let pop_button = document.getElementById('pop');

let input_container = document.getElementById('input_container');

let array = [];
let index = 0;

// Create 10 elements for array
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.className = 'box';

    let h1 = document.createElement('h1');
    div.appendChild(h1);

    array_container.appendChild(div);
    array.push(div);
    
    let div_input = document.createElement('div');
    div_input.className = 'input_box';

    let h1_input = document.createElement('h1');
    h1_input.className = 'input';
    h1_input.innerHTML = i;
    div_input.appendChild(h1_input);

    input_container.appendChild(div_input);
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

// Pop button will remove value from array
pop_button.addEventListener('click', (e) => {
    e.preventDefault();
    index--;
    array[index].querySelector('h1').innerHTML = '';
})
