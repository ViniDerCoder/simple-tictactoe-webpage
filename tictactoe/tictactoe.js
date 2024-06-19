import { checkComputerMoveInterval, finishGame } from '../index.js'
import { checkDraw, checkWin } from './checkWin.js'
import { changeField, getField, getFieldCopy, resetField } from './field.js'
import { getComputerMove } from './computer.js'

export let currentPlayer = 'X'

export let computerPlayer = 'O'
export let humanPlayer = computerPlayer === "X" ? "O" : "X"

export let score = {
    player: 0,
    computer: 0
}

export function startGame() {
    currentPlayer = Math.round(Math.random()) == 1 ? 'X' : 'O'

    const statusBar = document.getElementById('title-status-bar')
    statusBar.innerText = currentPlayer === computerPlayer ? "Computer starts" : "Player starts"
    
    resetField()
}

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
    const [row, col] = getComputerMove(getFieldCopy())

    if(move(row, col, currentPlayer)) {
        currentPlayer = humanPlayer
    }
}

function move(row, col, player) {
    if(changeField(row, col, player)) {
        let winner = checkWin(getField())
        if(!winner && checkDraw(getField())) {
            updateScore()
            finishGame("draw")
        } else {
            if(winner) {
                if(winner === humanPlayer) {
                    score.player++
                } else {
                    score.computer++
                }
                updateScore()
                finishGame(winner)
            }
        }
        currentPlayer = computerPlayer === currentPlayer ? humanPlayer : computerPlayer
        return true
    } else return false
}

function updateScore() {
    const scorePlayer1 = document.getElementById('player-score-value')
    const scorePlayer2 = document.getElementById('computer-score-value')
    
    if(scorePlayer1.innerText != score.player) {
        triggerAnimation(scorePlayer1)
        setTimeout(() => {
            scorePlayer1.innerText = score.player
        }, 500)
    }
    if(scorePlayer2.innerText != score.computer) {
        triggerAnimation(scorePlayer2)
        setTimeout(() => {
            scorePlayer2.innerText = score.computer
        }, 500)
    }
}

function triggerAnimation(element) {
    element.classList.add('animate-change');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate-change');
    }, { once: true });
}