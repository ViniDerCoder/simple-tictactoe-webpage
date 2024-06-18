import { clickEvent, currentPlayer, computerPlayer, computerMove } from './tictactoe/tictactoe.js';

let gameFinished = false
export function getGameFinished() {
    return gameFinished
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (event) => {
        if(!gameFinished) clickEvent(event)
    })
})

export function finishGame() {
    clearInterval(checkComputerMoveInterval)
    gameFinished = true
}

export let checkComputerMoveInterval = setInterval(() => {
    if(currentPlayer === computerPlayer) {
        computerMove();
    }
}, 100)

//selct menu
document.addEventListener('DOMContentLoaded', () => {
    const selectMenu = document.getElementById('player-symbol-style');

    selectMenu.addEventListener('change', (event) => {
        const selectedStyle = event.target.value;
        
        const cells = document.querySelectorAll('.gamefield .cell');
        cells.forEach(cell => {
            cell.setAttribute('data-style', selectedStyle);
        });
    });
});