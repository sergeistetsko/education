// console.log('hello, it-incubator');
// document.write('<h1>', 'hello, it-incubator', '</h1>');
/*
//data

let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

//ui program, render

document.write('<h1>', name, '</h1>');
document.write(`<input type="number" value="${graduatesCount}">`);
document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');*/

/*let student = {
    info: {
        firstName: 'Ivan',
        lastName: 'Ivanov'
    },
    address: {
        country: 'France',
        city: 'Paris',
    }
}

document.write(student.info.firstName);
document.write(student.info.lastName);
document.write(student.address.country);
document.write(student.address.city);*/

let currentUser = {
    name: 'Sergey'
};

let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 'EUR',
    currentBalance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false
};

let cards = [card1,card2];

//render

document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');

//render card

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    document.write('<div>');
    document.write('<b>', card.type + ' card', '</b>', '</br>');
    document.write('<b>', card.networkType, '</b>', '</br>');
    document.write('<b>', 'current balance', '</b>', '</br>');
    document.write('<span>', card.currentBalance, '</span>', '</br>');
    document.write('<h4>', card.number, '</h4>', '</br>');
    document.write('<span>', card.expirationMonth, '/', card.expirationYear,  '</span>', '</br>');
    document.write('</div>', '</br>');
}
/*
// Просто пример:

let marks = [
    {
        title: 'JS',
        value: 10,
    },
    {
        title: 'CS',
        value: 6,
    }
];

// отобразим в консоли все заголовки с оценками

for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    console.log("title: " + mark.title, ", mark: " + mark.value);
}*/
