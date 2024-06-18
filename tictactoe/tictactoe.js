import { changeField } from './field.js'

export let currentPlayer = 'X'

export let computerPlayer = 'O'
export let humanPlayer = computerPlayer === "X" ? "O" : "X"


export function clickEvent(event) {
    const row = event.target.getAttribute('data-row')
    const col = event.target.getAttribute('data-cell')

    if(currentPlayer === humanPlayer) {
        if(changeField(row, col, currentPlayer)) {
            currentPlayer = computerPlayer
        }
    }
}