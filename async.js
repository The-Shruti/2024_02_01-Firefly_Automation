function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function printStarBorderBox(rows, columns, starRow, starColumn) {
    let starBorderBox = '';
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1) {
                row += '-';
            } else if (j === 0 || j === columns - 1) {
                row += '|';
            } else if (i === starRow && j === starColumn) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        starBorderBox += row + '\n';
    }
    return starBorderBox;
}

function getRandomCoordinate(maxRow, maxColumn) {
    const row = Math.floor(Math.random() * (maxRow - 2)) + 1; // Avoid the first and last rows
    const column = Math.floor(Math.random() * (maxColumn - 2)) + 1; // Avoid the first and last columns
    return { row, column };
}

async function printStarBorderBoxAsync(rows, columns) {
   let starRow = Math.floor(rows / 2);
    let starColumn = Math.floor(columns / 2);
    let directionRow = 1;
    let directionColumn = 1;
 

    while (true) {
        starRow += directionRow;
        starColumn += directionColumn;

        // top
        if (starRow <= 0 || starRow >= rows - 1) {
            directionRow *= -1; // Reverse 
        }

        // bottom
        if (starColumn <= 0 || starColumn >= columns - 1) {
            directionColumn *= -1; // Reverse 
        }

     
        console.log(printStarBorderBox(rows, columns, starRow, starColumn));
        await sleep(200);
    }
}

const height = 30;
const width = 50;

// Use a shared state variable to ensure only one border is created
let hasBorder = false;

// Start the asynchronous loop with initial dimensions
if (!hasBorder) {
    printStarBorderBoxAsync(height, width);
    hasBorder = true;
}
