window.addEventListener("DOMContentLoaded", () => {
    let currentPlayerSymbol = "x";
    let squareValues = ["", "", "", "", "", "", "", "", ""];
    let gameStatus = "";

    const checkGameStatus = function() { //rows
        // if (gameStatus !== "") return;

        for (let i = 0; i < squareValues.length; i += 3) { //just squareVals !== "" is always true
            if (squareValues[i] !== "" &&
            squareValues[i] === squareValues[i + 1] && squareValues[i] === squareValues[i + 2]) {//booleans? && operator
                //console.log(squareValues[i]);
                //console.log([i]);
                gameStatus = squareValues[i].toUpperCase();
                //console.log(gameStatus);
                break; //stops loop once it finds first instance of true
            }
        }
        // //[0][1][2]
        // //[3][4][5]
        // //[6][7][8]
        for (let i = 0; i < 3; i++) { //columns

            if (squareValues[i] !== "" && squareValues[i] === squareValues[i + 3] && squareValues[i] === squareValues[i + 6]) {
                gameStatus = squareValues[i].toUpperCase();
                console.log(gameStatus);
                break;
            }
        }
        // //[0][3][6]
        // //[1][4][7]
        // //[2][5][8]

        if (squareValues[0] !== "" && squareValues[0] === squareValues[4] && squareValues[0] === squareValues[8]) {
            gameStatus = squareValues[0].toUpperCase();
            console.log(gameStatus);
        }

        if (squareValues[2] !== "" && squareValues[2] === squareValues[4] && squareValues[2] === squareValues[6]) {
            gameStatus = squareValues[2].toUpperCase();
            console.log(gameStatus);
        }
        // [0][4][8] || [2][4][6]
        // [1][5][9] if we use for loop, keeps looping i++ for i < 3

        // for (let i = 0; i < squareValues.length; i++) {

        //     if (squareValues[i] !== "")
        // }
        //If there is no winner, then check if all of the squares are full. If they are, then set the gameStatus equal to "None".
        //If the gameStatus is not an empty string, set document.getElementById('game-status').innerHTML to the
        //concatenated value of "Winner: " and the value of gameStatus. Use the id value of game-status to get a reference to that element.
        // if gameStatus !== "" {
        //     document.getElementById("game-status-message").innerHTML("Winner: " + gameStatus);
        // }
    }

    const ticGrid = document.getElementById("tic-tac-toe-board");
        ticGrid.addEventListener("click", event => {
        let squareId = event.target.id; //is box we're clicking
        let squareIdNumber = Number.parseInt(squareId[squareId.length - 1]);
        // console.log(squareIdNumber);

        if (squareValues[squareIdNumber] === "") { //checking array, id of box goes into squareValues
            let imageX = document.createElement("img");
            imageX.setAttribute("src", `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`)
            event.target.appendChild(imageX);
            squareValues[squareIdNumber] = currentPlayerSymbol;

            if (currentPlayerSymbol === "x") {
                currentPlayerSymbol = "o";
            } else {
                currentPlayerSymbol = "x";
            };
        };
        checkGameStatus();
    }); //end of click event

}); //end of DOMContent

//If a player has any three in a row, then that player wins.
// If a player has any three in a column, then that player wins.
// If a player has either of the diagonals, then that player wins.
// If there is no win and all squares have a player symbol in there, then the game is a tie.
// When the game begins, the header at the top should have no text in it.
// When a player wins the game, then the following happens:
// The header at the top should read "Winner: X" or "Winner: Y" depending on which player won.
// Empty squares in the grid no longer react to clicks.
// When the game goes into a tied state, the header at the top should read "Winner: None".

// Programmatically create an img element, set its source to appropriate value from the requirements
// by using the value in currentPlayerSymbol, and append the img element to the event target.
// Store the value of currentPlayerSymbol in the corresponding slot in the squareValues array.
// If the currentPlayerSymbol is "x", then set it to "o". Otherwise, set currentPlayerSymbol to "x".
