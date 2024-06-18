import { checkComputerMoveInterval } from '../index.js'
import { checkDraw, checkWin } from './checkWin.js'
import { changeField, getField } from './field.js'
import { getComputerMove } from './computer.js'

export let currentPlayer = 'X'

export let computerPlayer = 'O'
export let humanPlayer = computerPlayer === "X" ? "O" : "X"


export function clickEvent(event) {
    const row = event.target.getAttribute('data-row')
    const col = event.target.getAttribute('data-cell')

    if(currentPlayer === humanPlayer) {
        if(move(row, col, currentPlayer)) {
            currentPlayer = computerPlayer
        }
    }
}

export function computerMove() {
    const [row, col] = getComputerMove(getField())

    if(move(row, col, currentPlayer)) {
        currentPlayer = humanPlayer
    }
}

function move(row, col, player) {
    if(changeField(row, col, player)) {
        if(checkDraw(getField())) {
            clearInterval(checkComputerMoveInterval)
            console.log('Draw')
        } else {
            let winner = checkWin(getField())
            if(winner) {
                clearInterval(checkComputerMoveInterval)
                console.log('Winner:', winner)
            }
        }
        currentPlayer = computerPlayer === currentPlayer ? humanPlayer : computerPlayer
        return true
    } else return false
}