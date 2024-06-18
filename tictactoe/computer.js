import { checkWin, checkDraw } from "./checkWin.js"

export let computerSettings = {
    selection: 'minimax',
    
    minimax: {
        depth: 10
    }
}

export function getComputerMove(field) {
    switch (computerSettings.selection) {
        case 'random':
            return Random.getRandomMove(field)
        case 'minimax':
            return MiniMax.getBestMove(field)
        default: 
            return [-1, -1]
    }
}

class Random {
    static getRandomMove(field) {
        let row = Math.floor(Math.random() * 3) + 1
        let col = Math.floor(Math.random() * 3) + 1

        while (field[row - 1][col - 1] !== null) {
            row = Math.floor(Math.random() * 3) + 1
            col = Math.floor(Math.random() * 3) + 1
        }

        return [row, col]
    }
}

class MiniMax {
    static getBestMove(field) {
        let bestMove = null
        let bestScore = -Infinity

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (!field[row][col]) {
                    field[row][col] = 'O'
                    let score = MiniMax.#minimax(field, 0, false)
                    field[row][col] = null

                    if (score > bestScore) {
                        bestScore = score
                        bestMove = [row + 1, col + 1]
                    }
                }
            }
        }

        return bestMove
    }

    static #minimax(field, depth, maxmizing) {
        let result = checkWin(field)
        if (result !== null) {
            return result === 'O' ? 1 : -1
        }

        if (checkDraw(field)) {
            return 0
        }

        if(depth >= computerSettings.minimax.depth) return 0

        if (maxmizing) {
            let bestScore = -Infinity
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (field[row][col] === null) {
                        field[row][col] = 'O'
                        let score = this.#minimax(field, depth + 1, false)
                        field[row][col] = null

                        bestScore = Math.max(score, bestScore)
                    }
                }
            }

            return bestScore
        } else {
            let bestScore = Infinity
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (field[row][col] === null) {
                        field[row][col] = 'X'
                        let score = this.#minimax(field, depth + 1, true)
                        field[row][col] = null

                        bestScore = Math.min(score, bestScore)
                    }
                }
            }

            return bestScore
        }
    }
}