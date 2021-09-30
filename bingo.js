/*Create programmatically (using JS) a bingo board with 76 cells, numbered from 1 to 76.

Create a button to randomize a number from 1 to 76. 
The cell with same number should be highlighted in some way on the bingo board.
*/

const createBoard = function() {
    const boardContainer = document.getElementById("board-cells")
    for (let cells = 1; cells <= 76; cells++) {
        //creating a div element for each cells
        let newCellNode = document.createElement("div")
            //creating class for each cell , "cell"
        newCellNode.classList.add("cell")
            //giving the iterated number to cells as a value
        newCellNode.innerText = cells
        boardContainer.appendChild(newCellNode)
    }
}
window.onload = function() {
    createBoard()
}