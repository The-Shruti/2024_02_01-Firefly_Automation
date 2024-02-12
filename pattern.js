// Function to generate a random pattern with '*' at a random position
function generateRandomPattern(rows, columns) {
    // Initialize an empty string to store the pattern output
    let output = '';

    // Generate random row and column indices within the specified range
    const randomRow = Math.floor(Math.random() * rows) + 1; // Random row index
    const randomColumn = Math.floor(Math.random() * columns) + 1; // Random column index

    // Add top border to the output
    output += '_' + '-'.repeat(columns) + '_<br>';

    // Iterate over each row
    for (let i = 1; i <= rows; i++) {
        let rowString = '|'; // Initialize row string with '|' character
        // Iterate over each column in the row
        for (let j = 1; j <= columns; j++) {
            // Check if the current cell corresponds to the random position
            if (i === randomRow && j === randomColumn) {
                rowString += '*'; // Add '*' character if it matches the random position
            } else {
                rowString += ' '; // Add empty space otherwise
            }
        }
        rowString += '|<br>'; // Add closing '|' and line break to the row string
        output += rowString; // Append the row string to the output
    }

    // Add bottom border to the output
    output += '-' + '-'.repeat(columns) + '_<br>';
    
    // Return the generated pattern output
    return output;
}

// Function to refresh the pattern display
function refreshPattern() {
    // Display the random pattern inside a <pre> element
    document.write('<pre>' + generateRandomPattern(30, 50) + '</pre>');
}

// Refresh the pattern display every 2 seconds
setInterval(refreshPattern, 2000);
