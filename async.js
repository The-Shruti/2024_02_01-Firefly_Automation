// Function to pause execution for a specified number of milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to generate a box with borders and a star at a specified position
function printStarBorderBox(rows, columns, starRow, starColumn) {
    let starBorderBox = '';
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1) {
                row += '-'; // Add top and bottom borders
            } else if (j === 0 || j === columns - 1) {
                row += '|'; // Add side borders
            } else if (i === starRow && j === starColumn) {
                row += '*'; // Add the star at the specified position
            } else {
                row += ' '; // Add empty space
            }
        }
        starBorderBox += row + '\n'; // Add the row to the box
    }
    return starBorderBox; // Return the generated box as a string
}

// Function to generate a random coordinate within the inner area of a box
function getRandomCoordinate(maxRow, maxColumn) {
    const row = Math.floor(Math.random() * (maxRow - 2)) + 1; // Avoid the first and last rows
    const column = Math.floor(Math.random() * (maxColumn - 2)) + 1; // Avoid the first and last columns
    return { row, column }; // Return the randomly generated row and column as an object
}

// Asynchronous function to continuously print a border box with a moving star
async function printStarBorderBoxAsync(rows, columns) {
    let starRow = Math.floor(rows / 2); // Start with the star in the middle row
    let starColumn = Math.floor(columns / 2); // Start with the star in the middle column
    let directionRow = 1; // Direction of star movement along rows (1: down, -1: up)
    let directionColumn = 1; // Direction of star movement along columns (1: right, -1: left)

    while (true) {
        starRow += directionRow; // Move the star along rows
        starColumn += directionColumn; // Move the star along columns

        // Reverse direction when hitting top or bottom border
        if (starRow <= 0 || starRow >= rows - 1) {
            directionRow *= -1; 
        }

        // Reverse direction when hitting left or right border
        if (starColumn <= 0 || starColumn >= columns - 1) {
            directionColumn *= -1; 
        }

        // Print the border box with the updated star position
        console.log(printStarBorderBox(rows, columns, starRow, starColumn));

        await sleep(200); // Pause execution for 200 milliseconds
    }
}

// Constants defining the height and width of the border box
const height = 30;
const width = 50;

// Variable to ensure only one border box is created
let hasBorder = false;

// Start printing the border box asynchronously
if (!hasBorder) {
    printStarBorderBoxAsync(height, width);
    hasBorder = true;
}
