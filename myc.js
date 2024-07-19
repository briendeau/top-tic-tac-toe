/*
  Overview: 
  Tik tak toe game, players take turns picking spots to connect 3 matching markers until win lose or draw on a 3x3 grid. allow reset score and display the game results when triggered.

  Pseudocode (english-algorithm):
    create the html page with a 3x3 grid with 9 cells. [x]
    create a form on the side with name and marker selection and a start game button and reset  [x]
  . ask player for name and marker
  . computer selects default name and remaining marker
  
  create var for gameboard cells
  loop through cells and attach event listener click, if position is not taken insert player marker.    update board with marker
  
  once player selects, let computer select a random position that is not taken and insert their marker.   update board with marker

  then let player select again.

  after each turn check board to see if winner or draw condition.

  display winner or draw status above board when triggered.

*/
// let playerName = prompt("enter player name:");
// let marker = prompt("Type X or O to pick marker");

// let keepGoing = true;
// while (keepGoing) {
//   playGame();
//   if (playerWins) {
//     gameOver(playerName);
//   } else if (computerWins) {
//     gameOver(compName);
//   } else {
//     gameDraw();
//   }
// }

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

let boardObj =  gameBoard();
// players object
function createPlayer(name, marker) {
  let playerChoices = [];
  let compChoices = [];
  let name = name;
  let marker = marker;

  let takeTurn = (position) => {
      if (board[position] != "") {
        let cell = document.querySelector(`[data-index="${position}"]`);
        cell.textContent = marker;
        boardObj.board[position] = position;
        playerChoices.push(position);
      }
    }

    
  let computerTurn = () => {
    if (board[position] != "") {
      let cell = document.querySelector(`[data-index="${position}"]`);
      cell.textContent = marker;
      boardObj.board[position] = position;
      compChoices.push(position);
      }
    }

    let checkResults(choiceArr) {
      if (winningCombinations.contains(choiceArr)) {

      }
    }
    
  return { name, marker, takeTurn };
  };




// gameflow object

// when start button is clicked, call the gameFlow function to start the game.
let startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", gameFlow);

function gameFlow() {
  // ... existing player setup code

  const boardCells = document.querySelectorAll(".cell");
  for (const cell of boardCells) {
    cell.addEventListener("click", () => {
      player.takeTurn(cell.dataset.index);
      if (player.checkWin()) {
        alert(`${player.name} Wins!`);
        return; // Exit if player wins

      }

      // Call computer turn after successful player turn
      computerTurn(computer, gameBoard.getBoard().slice());

      if (computer.checkWin()) {
        alert(`${computer.name} Wins!`);
        return; // Exit if computer wins
      }

      if (isBoardFull(gameBoard.getBoard())) {
        alert("It's a Draw!");
      }
      event.stopPropagation();
    });
    
  }
}

}

function checkStatus() {
  for (let combo of winningCombinations) {
    if (combo == playerChoices) {
      console.log("human wins");
    } else if (combo == compChoices) {
      console.log("computer wins");
    }
  }
  console.log("draw");
}
