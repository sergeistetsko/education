// ---------------------------

const word0 = 'Wassup';
const word1 = 'Bye';
const word2 = 'Programmer';

const wordTranslation0 = 'Здарова';
const wordTranslation1 = 'Покеда';
const wordTranslation2 = 'Программист';

const wordsCount = 3;

const finishSuccessMessage = "Молодец. Good result!";
const finishUnsuccessMessage = "Молодец. Но постарайся лучше!";

const finishMessage = 'Молодец';

let correctAnswersCount = 0;

// ---------------------------

const userAnswer0 = prompt(word0);
alert(wordTranslation0 === wordTranslation0);
if (wordTranslation0 === wordTranslation0) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer1 = prompt(word1);
alert(wordTranslation1 === wordTranslation1);
if (wordTranslation1 === wordTranslation1) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer2 = prompt(word2)
alert(wordTranslation2 === wordTranslation2);
if (wordTranslation2 === wordTranslation2) {
    correctAnswersCount = correctAnswersCount + 1;
}

if ((correctAnswersCount / wordsCount * 100) > 50) {
    alert(finishSuccessMessage);
} else {
    alert(finishUnsuccessMessage);
}


