/*//исходные данные
const repeatCount = 0;

//инициализация стартового значения
let index = 1;
//проверка
if (index <= repeatCount) {
//целевое действие
    document.write('a');
}
//инкрементируем индекс
index = 2;
//проверка и т.д.
if (index <= repeatCount) {
    document.write('a');
}
index = 3;
if (index <= repeatCount) {
    document.write('a');
}
index = 4;
if (index <= repeatCount) {
    document.write('a');
}
index = 5;
if (index <= repeatCount) {
    document.write('a');
}
index = 6;
if (index <= repeatCount) {
    document.write('a');
}
index = 7;
if (index <= repeatCount) {
    document.write('a');
}*/

/*let repeatCount = 15;

for (let index = 0; index <= repeatCount; index++) {
    document.write('a');
}*/

/*let grades = [5,4,3];

for (let i = 0; i < grades.length; i++) {
    document.write(grades[i], '<br>')
}*/
/*
let shoppingLists = [
    ['молоко', 'xлеб', 'яйца'],
    ['сок', 'мороженое'],
    ['корм для кота', 'шампунь']
]
for (let i = 0; i < shoppingLists.length; i++) {
    document.write('Список ', i + 1, '<br>')
    document.write('-----------------', '<br>')
    for (let j = 0; j < shoppingLists[i].length; j++) {
        document.write(j + 1, ' - ', shoppingLists[i][j], '<br>')
    }
    document.write('<br>')
}*/
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

alert(notificationMessages.start.hello);

for (let i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].original);
    alert(userAnswer === words[i].translation);
    if (userAnswer === words[i].translation) {
        result.correctAnswersCount = result.correctAnswersCount + 1;
    }
}

const userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100;

if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSucces);
} else {
    alert(notificationMessages.result.finishUnsucces);
}