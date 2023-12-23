// example1
let ourFirstFunction = function () {
    console.log('Привет, мир!')
}
ourFirstFunction()

// example2
let sayHelloTo = function (name) {
    console.log('Привет, ' + name + '!')
}
sayHelloTo('Сергей')
sayHelloTo('Анна')

// example3
let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + '=^.^=')
    }
}
drawCats(5)

// example4
let printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + ' ' + whatToDraw)
    }
}
printMultipleTimes(5, '=^.^=')
printMultipleTimes(4, '=)')
printMultipleTimes(2, '>_<')

// example5
let double = function (number) {
    let expression = number * 2
    console.log(expression)
    return expression
}
double(5)

// example6
let doubleDouble = double(double(2))

// example7
let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)]
}

let randomWords0 = ['Планета', 'Червяк', 'Цветок', 'Компьютер']

console.log((pickRandomWord(randomWords0)))
console.log((pickRandomWord(randomWords0)))
console.log((pickRandomWord(randomWords0)))
console.log((pickRandomWord(randomWords0)))

console.log((pickRandomWord(['Привет', 'Александр', '!'])))

// example8
let randomBodyParts = ['глаз', 'нос', 'череп']
let randomAdjectives = ['вонючая', 'унылая', 'дурацкая']
let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса']

let randomInsult = 'У тебя ' + pickRandomWord(randomBodyParts) + ' словно ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomWords) + '!!!'
console.log(randomInsult)

// example9
function generateRandomInsult() {
    let randomBodyParts = ['глаз', 'нос', 'череп']
    let randomAdjectives = ['вонючая', 'унылая', 'дурацкая']
    let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса']
    
    return 'У тебя ' + pickRandomWord(randomBodyParts) + ' словно ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomWords) + '!!!'
}
// example10
let showFifthLetter = function (name) {
    let fifthLetter = 'Пятая буква вашего имени: ' + name[4] + '.'
    if (name.length < 5) {
        console.log(fifthLetter)
        return
    }
    console.log(fifthLetter)
    return fifthLetter
}
showFifthLetter('Сергей')
showFifthLetter('Ник')

// example11
function awardAMedalForPoints(score) {
    if (score < 3) {
        return 'Бронзовая'
    }
    if (score < 7) {
        return 'Серебряная'
    }
    return 'Золотая'
}
// exercise1
function add(a, b) {
    return a + b
}
function multiply(c, d) {
    return c * d
}
console.log(add(multiply(36325, 9824),7))

// exercise2
function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let arr3 = [1,2,3]
let arr4 = [4,5,6]
console.log(areArraysSame(arr3, arr4))

let arr5 = [1,2,3]
let arr6 = [1,2,3]
console.log(areArraysSame(arr5, arr6))

let arr7 = [1,2,3]
let arr8 = [1,2,3,4]
console.log(areArraysSame(arr7, arr8))

// exercise3
function pickWord() {
    let words = [
        'программа',
        'макака',
        'прекрасный',
        'оладушек',
        'голова',
        'тело'
    ]
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(_word) {
    let answerArray = [];
    for (let i = 0; i < _word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(_answerArray) {
    alert(_answerArray.join(" "));
}

function getGuess() {
    let guess = prompt("Угадайте букву или нажмите кнопку Отмена, чтобы прекратить игру.");
    if (guess === null) {
        return null;
    }
    while (guess.length !== 1) {
        guess = prompt("Пожалуйста, введите только одну букву.");
        if (guess === null) {
            return null;
        }
    }
    return guess;
}

function updateGameState(_guess, _word, _answerArray) {
    if (_guess === null) {
        return 0;
    }
    let appearances = 0;
    for (let j = 0; j < _word.length; j++) {
        if (_word[j] === _guess && _answerArray[j] === "_") {
            _answerArray[j] = _guess;
            appearances++;
        }
    }
    return appearances;
}

function showAnswerAndCongratulatePlayer(_answerArray) {
    showPlayerProgress(_answerArray);
    alert("Хорошая работа! Ответ был " + _answerArray.join(""));
}


// загаданное слово
let word = pickWord()

// answerArray: итоговый массив
let answerArray = setupAnswerArray(word)

// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length
while (remainingLetters > 0) {
    showPlayerProgress(answerArray)
    // guess: ответ игрока
    let guess = getGuess()
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите одиночную букву.')
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}
showAnswerAndCongratulatePlayer(answerArray)