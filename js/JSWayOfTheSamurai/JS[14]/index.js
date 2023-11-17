// ------------ functions

function showHelloMessage(_notificationMessages) {
    alert(_notificationMessages.start.hello);
}
function startTraining(_words, _result) {
    for (let i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].original);
        alert(userAnswer === _words[i].translation);
        if (userAnswer === _words[i].translation) {
            _result.correctAnswersCount = _result.correctAnswersCount + 1;
        }
    }
}
function getPercentage(_result, _words) {
    return _result.correctAnswersCount / _words.length * 100;
}
function showResult(_result, _words, _settings, _notificationMessages) {
    const userCorrectAnswersPercent = getPercentage(_result, _words);

    if (userCorrectAnswersPercent > _settings.correctAnswersMinPercent) {
        alert(_notificationMessages.result.finishSucces);
    } else {
        alert(_notificationMessages.result.finishUnsucces);
    }
}

// ------------ data

const words = [
    {
        original: 'Wassup',
        translation: 'Здарова'
    },
    {
        original: 'Bye',
        translation: 'Покеда'
    },
    {
        original: 'Programmer',
        translation: 'Программист'
    },
    {
        original: 'Laptop',
        translation: 'Ноутбук'
    },
    {
        original: 'Screen',
        translation: 'Экран'
    }
]
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

// ------------- main

showHelloMessage(notificationMessages);
startTraining(words, result);
showResult(result, words, settings, notificationMessages);

// -------------- examples

function printBrands() {
    console.log('it-kamasutra');
    document.write('it-incubator.io');
}

printBrands();

console.log(1);
document.write(2);

printBrands();

console.log(3);
document.write(4);

printBrands();

// --------------------

function getSum(a, b, c) {
    const sum = a + b + c;
    return sum;
}
function getGreetingMessage(userName, companyName) {
    return "Hello, " + userName + "! Welcome to " + companyName;
}

const result2 = getSum(10, 20, 30);
console.log(result2);

const message = getGreetingMessage('Sergey', 'IT-INCUBATOR.IO');
console.log(message);

