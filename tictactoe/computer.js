import { checkWin, checkDraw } from "./checkWin.js"

export let computerSettings = {
    selection: 'minimax',
    minimax: {
        depth: 3
    }
}

export function getComputerMove(field) {

    let row = Math.floor(Math.random() * 3) + 1
    let col = Math.floor(Math.random() * 3) + 1

    return [row, col]
}