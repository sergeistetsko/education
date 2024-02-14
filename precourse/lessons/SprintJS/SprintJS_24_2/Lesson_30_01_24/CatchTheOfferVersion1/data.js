export const data = {
    catchPoints: 0,
    missPoints: 0,
    winPoints: 5,
    win: false,
    x: 0,
    y: 0,
    rowsCount: 3,
    columnsCount: 3

}

let listener = null

function getRandomInt(N) {
    return Math.floor(Math.random() * N)
}

function changeOfferCoordinates() {

    let newX = 0
    let newY = 0
    let newCoordsIsEqualOldCoords
    do {
        newX = getRandomInt(data.columnsCount)
        newY = getRandomInt(data.rowsCount)
        newCoordsIsEqualOldCoords = newX === data.x && newY === data.y
    }
    while (
        newCoordsIsEqualOldCoords
        )
    data.x = newX
    data.y = newY
}

let offerJumpIntervalId = null
function runOfferJumpInterval() {
    clearInterval(offerJumpIntervalId)
    offerJumpIntervalId = setInterval(missOffer, 2000)
}

runOfferJumpInterval()

export function catchOffer() {
    data.catchPoints++
    if (data.catchPoints === data.winPoints) {
        data.win = true
        clearInterval(offerJumpIntervalId)
    } else {
        changeOfferCoordinates()
        runOfferJumpInterval()
    }
    listener()
}

export function restart() {
    data.catchPoints = 0
    data.missPoints = 0
    data.x = 0
    data.y = 0
    data.win = false
    runOfferJumpInterval()
    listener()
}

function missOffer() {
    data.missPoints++
    changeOfferCoordinates()
    listener()
}

export function subscribe(observer) {
    listener = observer
}