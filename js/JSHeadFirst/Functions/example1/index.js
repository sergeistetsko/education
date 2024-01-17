function bark(name, weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF WOOF')
    } else {
        console.log(name + ' says woof woof')
    }
}
bark('rover', 23)
bark('spot', 13)
bark('spike', 53)
bark('lady', 17)

bark('a', 20)
bark('b', -1)
bark('c', 0, 0)
bark('d', 10)
bark('e', 21)
