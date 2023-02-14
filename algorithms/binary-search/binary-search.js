let array = document.getElementById("array")

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
