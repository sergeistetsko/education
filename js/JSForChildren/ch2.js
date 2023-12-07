
// example1
let Nick;
console.log(Nick)

// example2
let age = 12;
console.log(age)
age = 13;
console.log(age)

// example3
let numberOfSiblings = 1 + 3
let numberOfCandies = 8
console.log(numberOfCandies / numberOfSiblings)

// example4
let secondsInAMinute = 60
let minutesInAHour = 60
let secondsInAHour = secondsInAMinute * minutesInAHour
console.log(secondsInAHour)

let hoursInADay = 24
let secondsInADay = secondsInAHour * hoursInADay
console.log(secondsInADay)

let daysInAYear = 365
let secondsInAYear = secondsInADay * daysInAYear
console.log(secondsInAYear)

let age1 = 30
console.log(age1 * secondsInAYear)

// example5
let highFives = 0
console.log(++highFives)
console.log(++highFives)
console.log(--highFives)

highFives = 0
console.log(highFives++)
console.log(highFives++)
console.log(highFives)

// example6
let x = 10
x = x + 5
console.log(x)

let score = 10
score += 7
console.log(score)
score -= 3
console.log(score)

// example7
let ballons = 100
ballons *= 2
console.log(ballons)

let ballons1 = 100
ballons1 /= 4
console.log(ballons1)

// example8
let myAwesomeString = 'Что-то ОЧЕНЬ крутое!!!'

let myThing = 5
myThing = 'это строка'
console.log(myThing)

let numberNine = 9
let stringNine = '9'
console.log(numberNine + numberNine)
console.log(stringNine + stringNine)

// example9
let greeting = 'Привет, '
let myName = 'Ник'
console.log(greeting + myName)

// example10
let java = 'Java'
console.log(java.length)

let script = 'Script'
console.log(script.length)

let javascript = java + script;
console.log(javascript)
console.log(javascript.length)

// example11
let myName1 = 'Ник'
console.log(myName1[0])
console.log(myName1[1])
console.log(myName1[2])

let codeWord1 = 'обернись'
let codeWord2 = 'неужели'
let codeWord3 = 'огурцы'
let codeWord4 = 'липкие'
let codeWord5 = '?!'
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1])

// example12
let longString = 'Эта длинная строка такая длинная'
console.log(longString.slice(4, 18))
console.log(longString.slice(4))

// example13
let case1 = 'Эй, как дела?'
console.log(case1.toUpperCase())
console.log(case1.toLowerCase())

// example14
let case2 = 'эЙ, кAК деЛа?'
let correctCase = case2.toUpperCase().slice(0,1) + case2.toLowerCase().slice(1)
console.log(correctCase)

// example15
let javascriptIsCool = true
console.log(javascriptIsCool)

// example16
let hadShower = true
let hasBackpack = false
console.log(hadShower && hasBackpack)

hadShower1 = true
hasBackpack1 = true
console.log(hadShower && hasBackpack)

// example17
let hasApple = true
let hasOrange = false
console.log(hasApple || hasOrange)

// example18
let isWeekend = true
let needToShowerToday = !isWeekend
console.log(needToShowerToday)
console.log(!needToShowerToday)

// example19
isWeekend = false
hadShower = true
hasApple = false
hasOrange = true

let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange)
console.log(shouldGoToSchool)

// example20
let height = 155
let heightRestriction = 150
console.log(height > heightRestriction)
height = 150
console.log(height > heightRestriction)
console.log(height >= heightRestriction)
heightRestriction = 120
console.log(height < heightRestriction)
height = 120
console.log(height <= heightRestriction)

// example21
let mySecretNumber = 5
let chicoGuess = 3
console.log(mySecretNumber === chicoGuess)
let harpoGuess = 7
console.log(mySecretNumber === harpoGuess)
let grouchoGuess = 5
console.log(mySecretNumber === grouchoGuess)

// example22
let stringNumber = '5'
let actualNumber = 5
console.log(stringNumber === actualNumber)
console.log(stringNumber == actualNumber)

// example23
age = 11
let accompanied = true
console.log(age >= 12 || (age < 12 && accompanied))
age = 11
accompanied = false
console.log(age >= 12 || (age < 12 && accompanied))

// example24
let myVariable
console.log(myVariable)
myNullVariable = null
console.log(myNullVariable)