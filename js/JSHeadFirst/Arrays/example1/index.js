const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]

let highScore = 0

for (let i = 0; i < scores.length; i++) {
    console.log('Bubble solution #' + i + ' score: ' + scores[i])
    if (scores[i] > highScore) {
        highScore = scores[i]
    }
}
console.log('Bubbles tests: ' + scores.length)
console.log('Highest bubble score: ' + highScore)

let bestSolutions = []

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
        bestSolutions.push(i)
    }
}
console.log('Solutions with the highest score: ' + bestSolutions.join(', '))