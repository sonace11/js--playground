// Create a 3x3 array grid
let grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];
  
  // Function to display the grid
  function displayGrid() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        process.stdout.write(grid[row][col]);
        if (col < 2) {
          process.stdout.write('  |  ');
        }
      }
      console.log();
      if (row < 2) {
        console.log('..............');
      }
    }
  }
  
  // Display the initial grid
displayGrid();
  