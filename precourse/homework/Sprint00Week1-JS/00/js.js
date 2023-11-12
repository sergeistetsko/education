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
    name: 'Alex'
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

document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');
document.write('<div>');
document.write('<b>', card1.type + ' card', '</b>', '</br>');
document.write('<b>', card1.networkType, '</b>', '</br>');
document.write('<b>', 'current balance', '</b>', '</br>');
document.write('<span>', card1.currentBalance, '</span>', '</br>');
document.write('<h4>', card1.number, '</h4>', '</br>');
document.write('<span>', card1.expirationMonth, '/', card1.expirationYear,  '</span>', '</br>');

document.write('</div>');