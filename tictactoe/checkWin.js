
/**
 * @returns {string} returns the winner or null for no winner
 */
export function checkWin(field) {
    //rows
    for (let row = 0; row < 3; row++) {
        if (field[row][0] === field[row][1] && field[row][1] === field[row][2] && field[row][0] !== null) {
            return field[row][0]
        }
    }

    //lines
    for (let line = 0; line < 3; line++) {
        if (field[0][line] === field[1][line] && field[1][line] === field[2][line] && field[0][line] !== null) {
            return field[0][line]
        }
    }

    //diagonals
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2] && field[0][0] !== null) {
        return field[0][0]
    }

    if (field[0][2] === field[1][1] && field[1][1] === field[2][0] && field[0][2] !== null) {
        return field[0][2]
    }

    return null
}

export function checkDraw(field) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (field[row][col] === null) {
                return false
            }
        }
    }

    return true
}