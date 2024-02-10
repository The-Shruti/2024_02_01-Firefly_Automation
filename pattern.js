function generateRandomPattern(rows, columns) {
    let output = '';
    const randomRow = Math.floor(Math.random() * rows) + 1; // Random row index
    const randomColumn = Math.floor(Math.random() * columns) + 1; // Random column index

    // Top border
    output += '_' + '-'.repeat(columns) + '_<br>';

    for (let i = 1; i <= rows; i++) {
        let rowString = '|';
        for (let j = 1; j <= columns; j++) {
            if (i === randomRow && j === randomColumn) {
                rowString += '*';
            } else {
                rowString += ' ';
            }
        }
        rowString += '|<br>';
        output += rowString;
    }

    // Bottom border
    output += '-' + '-'.repeat(columns) + '_<br>';
    
    return output;
}

function refreshPattern() {
    // Display the random pattern inside a <pre> element
    document.write('<pre>' + generateRandomPattern(30, 50) + '</pre>');
}

// Refresh the pattern every 2 seconds
setInterval(refreshPattern, 2000);

