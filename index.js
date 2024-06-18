import { clickEvent } from './tictactoe/tictactoe.js';

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (event) => {
        clickEvent(event)
    })
})