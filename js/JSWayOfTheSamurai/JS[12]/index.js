/*let grade1 = 5;
let grade2 = 6;
let grade3 = 7;
let grade4 = 8;
let grade5 = 9;

console.log(grade1);
console.log(grade4);*/

/*let grades = [5,6,7,8,9];

let extractedGrade = grades[4];

console.log(grades[0]);
console.log(grades[3]);
console.log(grades[10]);

console.log(extractedGrade)*/

/*let books = ['Война и мир', 'Мастер и Маргарита', 'Преступление и наказание'];

let masterAndMargoBook = books[1];

console.log(books[1]);*/

/*let answers = [true, false, true, true];
console.log(answers[1]);*/

/*

let persons = [
    {
        name: 'Анна',
        surname: 'Смирнова',
        birthYear: 1990
    },
    {
        name: 'Иван',
        surname: 'Петров',
        birthYear: 1985
    }
];

let person = persons[1].birthYear;

console.log(person);*/

/*
let shoppingLists = [
    ['молоко', 'xлеб', 'яйца'],
    ['сок', 'мороженое'],
    ['корм для кота', 'шампунь']
]
console.log(shoppingLists[1][0]);

let shoppingListsLength = shoppingLists.length;
console.log(shoppingListsLength);*/

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

const userAnswer0 = prompt(words[0].original);
alert(userAnswer0 === words[0].translation);
if (userAnswer0 === words[0].translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userAnswer1 = prompt(words[1].original);
alert(userAnswer1 === words[1].translation);
if (userAnswer1 === words[1].translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userAnswer2 = prompt(words[2].original);
alert(userAnswer2 === words[2].translation);
if (userAnswer2 === words[2].translation) {
    result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100;

if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSucces);
} else {
    alert(notificationMessages.result.finishUnsucces);
}