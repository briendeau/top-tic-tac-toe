/*
  Overview: 
  Tik tak toe game, players take turns picking spots to connect 3 matching markers until win lose or draw on a 3x3 grid. allow reset score and display the game results when triggered.

  Pseudocode (english-algorithm):
    create the html page with a 3x3 grid with 9 cells. [x]
    create a form on the side with name and marker selection and a start game button and reset  [x]
    computer uses default name and remaining marker [x]
    create function to create player objs, a board module pattern, and a gameflow obj.
    the player objs have their own takeTurn methods and store names, markers, and choices in arrays.
  
  create var for gameboard cells
  loop through cells and attach event listener click, if position is not taken insert player marker.    update board with marker
  
  once player selects, let computer select a random position that is not taken and insert their marker.   update board with marker

  then let player select again.

  after each turn check board to see if winner or draw condition.

  display winner or draw status above board when triggered.

*/

// gameboard object
function gameBoard() {
  let board = ["", "", "", "", "", "", "", "", ""];

  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return { board, winningCombinations };
}
let board = gameBoard();
// players object
function createPlayer(name, marker) {
  let playerChoices = [];
  let compChoices = [];
  let playerName = name;
  let playerMarker = marker;

  let takeTurn = (position) => {
    console.log("takeTurn method called");
    if (board.board[position] === "") {
      let cell = document.querySelector(`[data-index="${position}"]`);
      console.log(cell);
      cell.textContent = marker;
      board.board[position] = position;
      playerChoices.push(position);
      // we put the cell number into a new array for tracking and comparison with the winningCombos
      // console.log(playerChoices);
    }
  };

  let computerTurn = () => {
    const randomNumber = Math.floor(Math.random() * 9);
    if (board.board[randomNumber] === "") {
      let cell = document.querySelector(`[data-index="${randomNumber}"]`);
      cell.textContent = marker;
      board.board[randomNumber] = randomNumber;
      compChoices.push(randomNumber);
      // we put the cell number into a new array for tracking and comparison with the winningCombos
      // console.log(compChoices);
    }
  };

  // need to check the choices array with winning combo arrays to check for match.
  // let checkWin = (choiceArr) => {
  //   if (winningCombinations.contains(choiceArr)) {
  //   }
  // };

  return { playerName, playerMarker, takeTurn, computerTurn };
}

// gameflow object

// when start button is clicked, call the gameFlow function to start the game.

function gameFlow() {
  // create the new board obj

  let playerName = document.getElementById("playerName").value;
  let playerMarker = document.getElementById("playerMarker").value;
  console.log("game start clicked...");
  console.log(playerName);
  console.log(playerMarker);
  let computerName = "bob";
  let player = createPlayer(playerName, playerMarker);
  let compMarker = playerMarker === "X" ? "O" : "X";
  let computer = createPlayer(computerName, compMarker);

  const boardCells = document.querySelectorAll(".cell");
  for (const cell of boardCells) {
    cell.addEventListener("click", () => {
      console.log("cell clicked...");
      player.takeTurn(cell.dataset.index);
      computer.computerTurn();

      // if (player.checkWin(player.playerChoices)) {
      //   alert(`${player.name} Wins!`);
      //   return; // Exit if player wins
      // }

      // if (computer.checkWin(computer.compChoices)) {
      //   alert(`${computer.name} Wins!`);
      //   return; // Exit if computer wins
      // }

      // if (isBoardFull(gameBoard.getBoard())) {
      //   alert("It's a Draw!");
      // }
    });
  }
}

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", gameFlow);
