// Блок данных

const word0 = 'Wassup'
const word1 = 'Bye'
const word2 = 'Programmer'

const wordTranslation0 = 'Здарова'
const wordTranslation1 = 'Покеда'
const wordTranslation2 = 'Программист'

const wordsCount = 3

const finishSuccessMessage = 'Молодец. Good result!'
const finishUnsuccessMessage = 'Молодец. Но постарайся лучше!'

const correctAnswersMinPercent = 50

let correctAnswersCount = 0

// Блок логики

const userAnswer0 = prompt(word0)
alert(userAnswer0 === wordTranslation0)
if (userAnswer0 === wordTranslation0) {
    correctAnswersCount = correctAnswersCount + 1
}

const userAnswer1 = prompt(word1)
alert(userAnswer1 === wordTranslation1)
if (userAnswer1 === wordTranslation1) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer2 = prompt(word2)
alert(userAnswer2 === wordTranslation2)
if (userAnswer2 === wordTranslation2) {
    correctAnswersCount = correctAnswersCount + 1
}

const userCorrectAnswersPercent = correctAnswersCount / wordsCount * 100

if (userCorrectAnswersPercent > correctAnswersMinPercent) {
    alert(finishSuccessMessage)
} else {
    alert(finishUnsuccessMessage)
}


