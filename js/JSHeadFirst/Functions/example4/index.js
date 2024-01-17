function setTemp() {}
function setMode() {}
function bake(degrees) {
    let message

    if (degrees > 500) {
        message = 'I\'m not a nuclear reactor!'
    } else if (degrees < 100) {
        message = 'I\'m not a refrigerator!'
    } else {
        message = 'That\'s a very comfortable temperature for me.'
        setMode('bake')
        setTemp(degrees)
    }
    return message
}
const status = bake(350)
console.log(status)