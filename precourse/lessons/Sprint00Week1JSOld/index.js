let name = null

console.log(typeof name)

console.log(name === null)

console.log('1000' + 1000)

const chislo = true

if (typeof chislo == 'number') {
    console.log('chislo')
} else if (typeof chislo == 'boolean') {
    console.log('boolean')
} else {
    console.log('ne chislo')
}
typeof chislo === 'number' ? console.log('chislo') : console.log('ne chislo')