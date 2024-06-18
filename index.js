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