let x = 42
let y = '42'

if ((x === y) && (x == y)) {
    console.log('x и y равны по значению и типу')
} else if ((x !== y) && (x == y)) {
    console.log('x и y равны по значению, но не по типу')
} else {
    console.log('x и y не равны ни по значению, ни по типу')
}