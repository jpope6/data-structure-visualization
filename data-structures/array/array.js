let array_container = document.getElementById('array_container');
let push_button = document.getElementById('push');
let pop_button = document.getElementById('pop');
let search_button = document.getElementById('search');
let reset_button = document.getElementById('reset');

let back_button = document.getElementById('back_button');

back_button.addEventListener('click', () => {
    location.href = "../../index.html";
})

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

// Search button will search for value in array and highlight it
search_button.addEventListener('click', async (e) => {
    e.preventDefault();

    // if nothing is entered in input field, return
    if (!document.getElementById('input').value) return;

    let value = document.getElementById('input').value;
    for (let i = 0; i < array.length; i++) {

        // if value is empty, stop
        if (!array[i].querySelector('h1').innerHTML) {
            resetAfterSearch();
            return;
        }

        // if value is found, highlight it green and stop
        // else highlight it red
        if (array[i].querySelector('h1').innerHTML == value) {
            array[i].style.backgroundColor = 'green';
            await sleep(1000);
            resetAfterSearch();
            return;
        } else {
            array[i].style.backgroundColor = 'red';
        }

        // Sleep for 1 second
        await sleep(500);
    }
});

// Reset button will reset array and remove all highlighted values 
reset_button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < array.length; i++) {
        array[i].querySelector('h1').innerHTML = '';
        array[i].style.backgroundColor = 'black';
        document.getElementById('input').value = '';
    }

    index = 0;
});

// Sleep function to delay execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to reset the color of the array after search 
function resetAfterSearch() {
    for (let i = 0; i < array.length; i++) {
        document.getElementById('input').value = '';
        array[i].style.backgroundColor = 'black';
    }
}
