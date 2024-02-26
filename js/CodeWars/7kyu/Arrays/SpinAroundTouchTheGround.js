function spinAround(turns) {
    let numberOfTurns = 0

    for (let i = 0; i < turns.length; i++) {
        if (turns[i] === 'right') {
            numberOfTurns += 0.25
        } else {
            numberOfTurns -= 0.25
        }
    }

    return Math.floor(Math.abs(numberOfTurns))
}