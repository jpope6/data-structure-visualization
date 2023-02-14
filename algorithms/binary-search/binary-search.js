let array = document.getElementById("array")
let value = document.getElementById("input_value")
let searchButton = document.getElementById("search_button")
let resetButton = document.getElementById("reset_button")

let arr = []

// This dictionary will map the index of the element to the element itself
let dict = {}

// function adds 100 elements to the array in 5 rows
function addElements() {
    // Create empty row
    let row = document.createElement("div")
    row.className = "row"

    // Create 100 elements
    for (let i = 1; i <= 100; i++) {
        // Create element
        let element = document.createElement("div")
        element.className = "element"
        element.innerText = i
        arr.push(i)
        dict[i - 1] = element;

        // Add element to row
        row.appendChild(element)

        // if there are 20 elements in the row, add the row to the array
        if (i % 20 == 0) {
            if (i != 0) {
                array.appendChild(row)
                row = document.createElement("div")
                row.className = "row"
            }
        }
    }
    // Add the last row to the array
    array.appendChild(row)
}

addElements()

// This function will use binary search for the given element in the array
async function search() {
    let target = value.value;

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        highlight(mid, target)
        await sleep(1000)

        if (arr[mid] == target) {
            erase(mid, true)
            erase(mid, false)
            return mid
        } else if (arr[mid] < target) {
            erase(mid + 1, true)
            left = mid + 1
        } else {
            erase(mid - 1, false)
            right = mid - 1
        }
    }

    return -1
}

// Add event listener to the search button 
searchButton.addEventListener("click", () => search())

// This function will highlight the element at the given index 
// with green if the element is the target, otherwise it will be red
function highlight(index, target) {
    if (dict[index].innerText == target) {
        dict[index].style.backgroundColor = "green"
    } else {
        dict[index].style.backgroundColor = "red"
    }
}

// This function will erase the elements on the left or right side of the array
// depending on the binary search function
function erase(index, direction) {
    // if direction is false, erase the left side of the array
    if (direction) {
        for (let i = 0; i < index; i++) {
            dict[i].style.color = "black";
            dict[i].style.border = "1px solid black";
            dict[i].style.background = "black"
        }
    } else {
        // if direction is true, erase the right side of the array
        for (let i = index + 1; i < arr.length; i++) {
            dict[i].style.color = "black";
            dict[i].style.border = "1px solid black";
            dict[i].style.background = "black"
        }
    }
}

// Add event listener to the reset button 
resetButton.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
        dict[i].style.color = "white";
        dict[i].style.border = "1px solid white";
        dict[i].style.background = "black"
    }
    value.value = "";
});

// Sleep function to delay execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
