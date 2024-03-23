const location_1 = 3
const location_2 = 4
const location_3 = 5

const guess = 4

if (guess === location_1) {
    alert('Hit!')
} else if (guess === location_2) {
    alert('Hit!')
} else if (guess === location_3) {
    alert('Hit!')
} else {
    alert('Miss!')
}

const inStock = true
const onSale = false

if (inStock === true) {
    if (onSale === true) {
        alert('Buy')
    }
}

const price = 100

if (inStock === true && (onSale === true || price < 80)) {
    alert('Buy!!!')
}