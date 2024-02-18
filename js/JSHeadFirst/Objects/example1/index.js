const taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341
}
const cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892
}
const fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000
}
const chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}
function prequal(car) {
    if (car.mileage > 10000) {
        return false
    } else if (car.year > 1960) {
        return false
    }
    return true
}

const worthALook = prequal(taxi)

if (worthALook) {
    console.log('You gotta check out this ' + taxi.make + ' ' + taxi.model)
} else {
    console.log('You should really pass on the ' + taxi.make + ' ' + taxi.model)
}

console.log(prequal(cadi), prequal(fiat), prequal(chevy))
