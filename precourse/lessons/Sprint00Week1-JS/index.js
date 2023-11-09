let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true,
    transactions: [
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: -874,
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
    transactions: [
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        }
    ]
};

let cards = [card1, card2];

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    // render card
    
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
                ",",);
                if (transaction.amount > 0) {
                    document.write(
                        '<span class="income">',transaction.amount, '</span>');
                } else {
                    document.write(
                        '<span class="outcome">',transaction.amount, '</span>');
                }
            
            
            document.write(
                "</li>");
        }
    document.write("</ul>");
    document.write('</div>');
    document.write("<hr>");
}