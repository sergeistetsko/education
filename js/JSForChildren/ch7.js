let name = prompt('Как вас зовут ?')
console.log('Привет, ' + name)

let likesCats = confirm('Тебе нравятся кошки?')
if (likesCats) {
    console.log('Ты классная кошка!')
} else {
    console.log('Что ж, не проблема. Всё равно ты молодец!')
}

alert('Javascript - это здорово!')

// Проектирование игры

let words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'голова',
    'тело'
]

function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

function checkGuess(word, answerArray, guess) {
    let correctGuess = false
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess.toLowerCase()) {
            if (answerArray[j] === '_') {
                answerArray[j] = guess.toLowerCase()
                remainingLetters--
            }
            correctGuess = true
        }
    }
    return correctGuess
}

function showResults(word, answerArray, countWrongAnswers) {
    alert(answerArray.join(' '))
    if (countWrongAnswers > 3) {
        alert('Плохо! Слово ' + word + ' неугадано!')
    } else {
        alert('Отлично! Было загадано слово ' + word + '!')
    }
}

let word = getRandomWord(words)

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

let remainingLetters = word.length

let countWrongAnswers = 0

let maxNumberErrors = 4

while (remainingLetters > 0 && countWrongAnswers <= maxNumberErrors) {
    alert(answerArray.join(' '))

    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.')

    if (guess === null) {
        countWrongAnswers++
        alert('Буква введена неверно! Осталось попыток: ' + (maxNumberErrors - countWrongAnswers + 1))
        break
    } else if (guess.length !== 1) {
        countWrongAnswers++
        alert('Буква введена неверно! Осталось попыток: ' + (maxNumberErrors - countWrongAnswers + 1))
    } else {
        let correctGuess = checkGuess(word, answerArray, guess)
        if (correctGuess) {
            alert('Буква введена верно!')
        }
    }
}
showResults(word, answerArray, countWrongAnswers)


/*let words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'голова',
    'тело'
]

let word = words[Math.floor(Math.random() * words.length)].toLowerCase()

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

let remainingLetters = word.length

let countWrongAnswers = 0

while (remainingLetters > 0 && countWrongAnswers <= 3) {
    alert(answerArray.join(' '))

    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.')

    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву.')
    } else {
        let correctGuess = false
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase()) {
                if (answerArray[j] === '_') {
                    answerArray[j] = guess.toLowerCase()
                    remainingLetters--
                }
                correctGuess = true
            }
        }
        if (correctGuess) {
            alert('Буква введена верно!')
        } else {
            countWrongAnswers++
            alert('Буква введена неверно!')
        }
    }
}
alert(answerArray.join(' '))
if (countWrongAnswers > 3) {
    alert('Плохо! Было загадано слово ' + word)
} else {
    alert('Отлично! Было загадано слово ' + word)
}*/

