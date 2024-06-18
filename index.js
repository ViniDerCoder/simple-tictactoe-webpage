import { clickEvent, currentPlayer, computerPlayer, computerMove, startGame as resetGame } from './tictactoe/tictactoe.js';

let gameLocked = true
export function getGameLocked() {
    return gameLocked
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (event) => {
        if(!gameLocked) clickEvent(event)
    })
})

export function finishGame(winner) {
    const statusBar = document.getElementById('title-status-bar')
    if(winner === "draw") {
        statusBar.innerText = "Game over - Tie!"
        console.log("It's a draw!")
    } else { 
        statusBar.innerText = "Game over - Player " + winner + " wins!"
        console.log("Player " + winner + " wins!")
    }
    clearInterval(checkComputerMoveInterval)
    gameLocked = true
}

export let checkComputerMoveInterval;

export function startGame() {
    resetGame()
    gameLocked = false
    checkComputerMoveInterval = setInterval(() => {
        if(currentPlayer === computerPlayer) {
            computerMove();
        }
    }, 100)
}

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    //selct menu
    const selectMenu = document.getElementById('player-symbol-style');

    selectMenu.addEventListener('change', (event) => {
        const selectedStyle = event.target.value;
        
        const cells = document.querySelectorAll('.gamefield .cell');
        cells.forEach(cell => {
            cell.setAttribute('data-style', selectedStyle);
        });
    });

    //reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        startGame();
    });
});