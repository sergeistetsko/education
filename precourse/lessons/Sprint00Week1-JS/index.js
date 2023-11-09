console.log('hello, it-incubator');
document.write('<h1>', 'Hello, world!', '</h1>');

// data

let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

// render

document.write('<h1>', name, '</h1>');
document.write('<input type="number" value="' + graduatesCount + '">');
document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');

let student = {
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
document.write(student.address.city);

//data
let currentUser = {
    name: 'Sergei'
}
let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
    transactions: [
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};
let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 'EUR',
    currentBalance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
    transactions: [
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};

// //render
// document.write('<h1>', 'Hello, ' + currentUser.name,'</h1>');
// document.write('<h2>', 'Cards: ', '</h2>');
//
// //render card 1
// document.write('<div>');
// document.write('<b>', card1.type + ' card', '</b>', '</br>');
// document.write('<b>', card1.networkType, '</b>', '</br>');
// document.write('<b>', 'current balance', '</b>', '</br>');
// document.write('<b>', card1.currentBalance, '</b>');
// document.write('<span>', card1.currentBalance, '</span>');
// document.write('<h4>', card1.number, '</h4>');
// document.write('<span>', card1.expirationMonth, '/', card1.expirationYear, '</span>');
// document.write('</div>');
//
// //render card 2
// document.write('<div>');
// document.write('<b>', card2.type + ' card', '</b>', '</br>');
// document.write('<b>', card2.networkType, '</b>', '</br>');
// document.write('<b>', 'current balance', '</b>', '</br>');
// document.write('<b>', card2.currentBalance, '</b>');
// document.write('<span>', card2.currentBalance, '</span>');
// document.write('<h4>', card2.number, '</h4>');
// document.write('<span>', card2.expirationMonth, '/', card2.expirationYear, '</span>');
// document.write('</div>');
//
// // Просто пример:
// let marks = [{
//     title: 'JS',
//     value: 10,
// },
//     {
//         title: 'CS',
//         value: 6,
//     }
// ];
// // отобразим в консоли все заголовки с оценками
// for (let i = 0; i < marks.length; i++) {
//     let mark = marks[i];
//     console.log("title: " + mark.title, ", mark: " + mark.value);
// }

let cards = [card1, card2];

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    
    // render card
    document.write('<div>');
    document.write('<b>', card.type + ' card', '</b>', '</br>');
    document.write('<b>', card.networkType, '</b>', '</br>');
    document.write('<b>', 'current balance', '</b>', '</br>');
    document.write('<b>', card.currentBalance, '</b>');
    document.write('<span>', card.currentBalance, '</span>');
    document.write('<h4>', card.number, '</h4>');
    document.write('<span>', card.expirationMonth, '/', card.expirationYear, '</span>');

    document.write("<h2>", "History Transaction", "</h2>");
    document.write("<ul>");
    
    for (let j = 0; j < card.transactions.length; j++) {
        let transaction = card.transactions[j];
        document.write(
            "<li>",
            transaction.title,
            ", ",
            transaction.date,
            ",",
            transaction.amount,
            "</li>");
        console.log("title: " + mark.title, ", mark: " + mark.value);
        
    document.write("</ul>");

    document.write('</div>');
    document.write('<hr>');


    console.log("title: " + card.title, ", mark: " + card.value);
}