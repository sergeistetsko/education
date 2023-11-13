/*
let myConsole = {
    name: 'Sergey',
    age: 30
};
window.alert(myConsole.age);
myConsole.age = 31;
window.alert(myConsole.age);

const laptop1 = {
    name: 'zenbook',
    manufacturer: {
        title: 'ASUS',
        factoriesCount: 10,
        factoryAddress: 'China, JohueLee 12'
    },
    price: 1000
}
const laptop2 = {
    name: 'macbook',
    manufacturer: 'APPLE',
    price: 3000
}
const moneyTransfering = {
    from: 'Sergey',
    to: 'Dima',
    amount: 10
}
console.log(laptop1.manufacturer.factoriesCount);*/
const vocabulary = {
    words: {
        word0: {
            original: 'Wassup',
            translation: 'Здарова'
        },
        word1: {
            original: 'Bye',
            translation: 'Покеда'
        },
        word2: {
            original: 'Programmer',
            translation: 'Программист'
        }
    },
    wordsCount: 3
}

const wordsCount = 3;
const notificationMessages = {
    start: {
        hello: 'Hello man. You can learn English. Good Luck'
    },
    result: {
        finishSucces: 'Молодец. Good result!',
        finishUnsucces: 'Молодец. Но постарайся лучше!'
    }
}
const settings = {
    correctAnswersMinPercent: 50
}
const result = {
    correctAnswersCount: 0
}

alert(notificationMessages.start.hello);

const userAnswer0 = prompt(vocabulary.words.word0.original);
alert(userAnswer0 === vocabulary.words.word0.translation);
if (userAnswer0 === vocabulary.words.word0.translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userAnswer1 = prompt(vocabulary.words.word1.original);
alert(userAnswer1 === vocabulary.words.word1.translation);
if (userAnswer1 === vocabulary.words.word1.translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userAnswer2 = prompt(vocabulary.words.word2.original);
alert(userAnswer2 === vocabulary.words.word2.translation);
if (userAnswer2 === vocabulary.words.word2.translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userCorrectAnswersPercent = result.correctAnswersCount / vocabulary.wordsCount * 100;

if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSucces);
} else {
    alert(notificationMessages.result.finishUnsucces);
}