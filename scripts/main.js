//-------------------------------------------------------------
// Game configuration data
//-------------------------------------------------------------

// This is a numerical representation of the pacman game.
// It uses numbers to represent walls, coins, empty space, and pacman.
let gameData = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1],
				[1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
				[1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1],
				[1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1],
				[1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1],
				[1,0,1,0,0,9,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,4,1],
				[1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
				[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
				[1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1],
				[1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1],
				[1,1,0,0,0,0,1,0,1,0,0,8,0,0,0,1,0,1,0,0,0,0,1,1],
				[1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1],
				[1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1],
				[1,1,0,1,1,0,0,0,0,0,6,1,1,0,0,0,0,0,0,1,1,0,1,1],
				[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
				[1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1],
				[1,0,1,1,1,0,1,1,1,1,0,1,1,7,1,1,1,1,0,1,1,1,0,1],
				[1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1],
				[1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// Specifically, a wall is represented by the number 1,
// a coin is the number 2, empty ground is the number 3,
// and Pacman is the number 5.


// In our code below, we want to be able to refer to names of things,
// and not numbers. To make that possible, we set up a few labels.
const WALL   = 1;
const COIN   = 0;
const GROUND = 3;
const PACMAN = 5;
const Google1 = 8;
const Google2 = 9;
const Google3 = 2;
const Google4 = 4;
const Google5 = 6;
const Google6 = 7;




console.log(gameData.Google6)


// We will use the identifier "map" to refer to the game map.
// We won't assign this until later on, when we generate it
// using the gameData.
let map;

// We need to keep track of Pacman's location on the game board.
// That is done through a pair of coordinates.
// And, we will keep track of what direction she is facing.
let pacman = {
  x: 6,
  y: 4,
  direction: 'right'
};


//-------------------------------------------------------------
// Game map creation functions
//-------------------------------------------------------------
// This function converts gameData into DOM elements.
function createTiles(data) {

  // We'll keep the DOM elements in an array.
  let tilesArray = [];

  // Let's take one row at a time...
  for (let row of data) {

    // Then look at each column in that row.
    for (let col of row) {

      // We create a game tile as a div element.
      let tile = document.createElement('div');

      // We assign every tile the class name tile.
      tile.classList.add('tile');

      // Now, depending on the numerical value,
      // we need to add a more specific class.
      if (col === WALL) {
        tile.classList.add('wall');

      } else if (col === COIN) {
        tile.classList.add('coin');

      }
      else if (col === Google1) {
        tile.classList.add('Google1');
        tile.setAttribute("id","Google1")
      }
      else if (col === Google2) {
        tile.classList.add('Google2');
        tile.setAttribute("id","Google2")
      }
      else if (col === Google3) {
        tile.classList.add('Google3');
        tile.setAttribute("id","Google3")
      }
      else if (col === Google4) {
        console.log("a7na lina")
        tile.classList.add('Google4');
        tile.setAttribute("id","Google4")
      } 
      else if (col === Google5) {
        tile.classList.add('Google5');
        tile.setAttribute("id","Google5")
      }
      else if (col === Google6) {
        tile.classList.add('Google6');
        tile.setAttribute("id","Google6")

      }else if (col === GROUND) {
        tile.classList.add('ground');

      } else if (col === PACMAN) {
        tile.classList.add('pacman');

        // For Pacman, we will add yet another
        // class for the direction pacman is facing.
        tile.classList.add(pacman.direction);

      }

      // Now that our individual tile is configured,
      // we add it to the tilesArray.
      tilesArray.push(tile);
    }

    // Once we reach the end of a row, we create a br element,
    // which tells the browser to create a line break on the page.
    let brTile = document.createElement('br');

    // We then add that br element to the tilesArray.
    tilesArray.push(brTile);
  }

  // At the end of our function, we return the array
  // of configured tiles.
  return tilesArray;
}

// This function creates a map element, fills it with tiles,
// and adds it to the page.
function drawMap() {
  map = document.createElement('div');
  map.setAttribute("id","hello")


  let tiles = createTiles(gameData);

  for (let tile of tiles) {
   
    map.appendChild(tile);

  }

  document.body.appendChild(map);
}

// This function removes the map element from the page.
function eraseMap() {
if(document.getElementById("hello").contains(document.getElementById('Google6'))||document.getElementById("hello").contains(document.getElementById('Google5'))||document.getElementById("hello").contains(document.getElementById('Google4'))||document.getElementById("hello").contains(document.getElementById('Google3'))||document.getElementById("hello").contains(document.getElementById('Google2'))||document.getElementById("hello").contains(document.getElementById('Google1'))){
  document.body.removeChild(map);
}
else{ 
   document.body.innerHTML=`<video class="center" width="600" height="500" autoplay>
    <source src="./images/video.mp4" type="video/mp4">
    
  </video>`




}}

//-------------------------------------------------------------
// Movement functions
//-------------------------------------------------------------

// Each function does the following:
// - set pacman's direction so that we show the correct image
// - check to see if we hit a wall
// - if we didn't hit a wall, set pacman's old location to empty space
// - update pacman's location
// - draw pacman in the new location

function moveDown() {
  pacman.direction = 'down';
  if (gameData[pacman.y+1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveUp() {
  pacman.direction = 'up';
  if (gameData[pacman.y-1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y - 1;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveLeft() {
  pacman.direction = 'left';
  if (gameData[pacman.y][pacman.x-1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x - 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveRight() {
  pacman.direction = 'right';
  if (gameData[pacman.y][pacman.x+1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

// This function sets up the listener for the whole page.
// Specifically, when the user presses a key, we run a function
// that handles that key press.
function setupKeyboardControls() {
  document.addEventListener('keydown', function (e) {

    // As far as the browser is concerned, each key on the keyboard
    // is associated with a numeric value.
    // After some experimenting, you can discover which numeric values
    // correspond to the arrow keys.

    // Each time the user moves, we recalculate Pacman's location,
    // update the
    if (e.keyCode === 37) {         // left arrow is 37
      moveLeft();

    } else if (e.keyCode === 38) {  // up arrow is 38
      moveUp();

    } else if (e.keyCode === 39){   // right arrow is 39
      moveRight();

    } else if (e.keyCode === 40){   // down arrow is 40
      moveDown();
    }

    // After every move, we erase the map and redraw it.
    eraseMap();
    drawMap();
  });
}

//-------------------------------------------------------------
// Main game setup function
//-------------------------------------------------------------
function main() {
  // Initialize the game by drawing the map and setting up the
  // keyboard controls.
  drawMap();
  setupKeyboardControls();


}
// if(document.getElementsByClassName('Google6')[0].style.display=="none"){



// }

// Finally, after we define all of our functions, we need to start
// the game.
main();
