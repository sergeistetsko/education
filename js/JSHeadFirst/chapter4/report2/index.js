const scores = [
    60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
]
const costs = [
    .25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .27, .25, .26, .29
]

const bestSolutions = []

function printAndGetHighScore(_scores) {
    let count = 0
    _scores.forEach((element, index) => {
        console.log(`Bubble solution #${index} score: ${element}`)
        count++
    })
    console.log(`Bubbles tests: ${count}`)
    console.log('Highest bubble score: ' + Math.max(...scores))
}
function printBestSolutions(_scores, _bestSolutions) {
    const maxScore = Math.max(..._scores);
    _scores.forEach((element, index) => {
        if (element === maxScore) {
            _bestSolutions.push(index);
        }
    });
    console.log(`Solutions with the highest score: ${_bestSolutions}`);
    return _bestSolutions
}
function printBestSolution(_scores, _costs, _bestSolutions) {
    let bestSolution = 1
    let minCost = 0
    _bestSolutions.forEach((element, index) => {
        if (bestSolution > _costs[element]) {
            bestSolution = _costs[element]
            minCost = _bestSolutions[index]
        }
    })
    console.log(`Winner: sample #${minCost}`)
}

printAndGetHighScore(scores)
printBestSolutions(scores, bestSolutions)
printBestSolution(scores, costs, bestSolutions)