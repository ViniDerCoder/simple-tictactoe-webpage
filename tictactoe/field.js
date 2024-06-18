let field = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export function getField() {
    return field
}

export function resetField() {
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    document.querySelectorAll('.cell').forEach(cell => {
        cell.setAttribute('data-type', 'none')
    })
}

export function getFieldCopy() {
    return field.reduce((acc, row) => {
        acc.push([...row])
        return acc
    }, [])
}

export function changeField(row, col, player) {
    console.log(row, col, player, field)
    if(field[row-1][col-1]) return false

    field[row-1][col-1] = player

    const cell = document.querySelector("#row-" + row).querySelector("[data-cell='" + col + "']")

    if(!cell) return false

    cell.setAttribute('data-type', 'player-' + player.toLowerCase());

    return true
}