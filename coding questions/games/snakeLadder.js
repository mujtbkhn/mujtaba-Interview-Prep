function snakeLadder(turns = 30) {

    const board = {
        snakes: { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 },
        ladder: { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 }
    }
    let position = 0
    for (let turn = 1; turn <= turns; turn++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(`Turn : ${turn}, Dice: ${dice}`)

        position += dice
        console.log(`position after dice roll: ${position}`)

        if(position > 100) position = 100


        if (board.snakes[position]) {
            console.log(`Oh no! Snake at ${position} going down to ${board.snakes[position]}`)
            position = board.snakes[position]
        } else if (board.ladder[position]) {
            console.log(`Yay! ladder at ${position} going up to ${board.ladder[position]}`)
            position = board.ladder[position]
        }

        console.log(`Final position after turn ${turn} : ${position}`)
        console.log('---')

        if (position === 100) {
            console.log(`Congrats you have completed the snake ladder`)
            break;
        }
    }
    return position
}

console.log(snakeLadder())