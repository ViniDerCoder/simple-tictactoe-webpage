import { clickEvent, currentPlayer, computerPlayer, computerMove } from './tictactoe/tictactoe.js';

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (event) => {
        clickEvent(event)
    })
})

export let checkComputerMoveInterval = setInterval(() => {
    if(currentPlayer === computerPlayer) {
        computerMove();
    }
}, 100)