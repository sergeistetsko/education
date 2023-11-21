// data
const currentUser = getCurrentUser();
const cards = getCards();
// render
renderHeader(currentUser.name);
for (let i = 0; i < cards.length; i++) {
    renderCard(cards[i]);
}
// functions
function getCurrentUser() {
    let newUser = {
        name: 'Alex',
    }
    return newUser;
}
function getCards() {
    let card1 = {
        type: "debit",
        networkType: "mastercard",
        currencyType: "USD",
        currentBalance: 5750.53,
        number: 5282345678901289,
        expirationYear: 2025,
        expirationMonth: 9,
        isActive: true,
        transactions: [
            {
                title: "Order Revenue",
                amount: 874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
            {
                title: "Order Revenue",
                amount: -874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
        ],
    };

    let card2 = {
        type: "credit",
        networkType: "visa",
        currencyType: "EUR",
        currentBalance: 1343.53,
        number: 9232654321012032,
        expirationYear: 2026,
        expirationMonth: 4,
        isActive: false,
        transactions: [
            {
                title: "Order Revenue",
                amount: -874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
            {
                title: "Order Revenue",
                amount: -874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
        ],
    };

    let card3 = {
        type: "debit",
        networkType: "mastercard",
        currencyType: "GBP",
        currentBalance: 3263.65,
        number: 554259349582930,
        expirationYear: 2028,
        expirationMonth: 3,
        isActive: true,
        //.. all existing properties
        transactions: [
            {
                title: "Order Revenue",
                amount: 874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
            {
                title: "Order Revenue",
                amount: 874,
                date: new Date(2022, 3, 25, 16, 43, 22), // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
            },
        ],
    };

    let cards = [card1, card2, card3];

    return cards;
}
function renderHeader(userName) {
    document.write("<h1>", "Hello, " + userName, "</h1>");
    document.write("<h2>", "Cards: ", "</h2>");
}
function renderCard(card) {
    document.write("<div class='card-block'>");
    document.write("<b>", card.type + " card", "</b>", "<br>");

    let networkLogo = '';
    switch (card.networkType) {
        case "visa":
            networkLogo = '<img src="visa_logo.png">';
            break;
        case "mastercard":
            networkLogo = '<img src="mastercard_logo.png">';
            break;
    }

    document.write(networkLogo);
    document.write("<b>", "current balance", "</b>", "<br>");

    let currencySign = "";

    switch (card.currencyType) {
        case "USD":
            currencySign = "💵";
            break;
        case "EUR":
            currencySign = "💶";
            break;
        case "GBP":
            currencySign = "💷";
            break;
    }
    document.write("<span>", currencySign + card.currentBalance, "</span>", "<br>");
    document.write("<h4>", card.number, "</h4>");
    document.write(
        "<span>",
        card.expirationMonth,
        "/",
        card.expirationYear,
        "</span>"
    );
    document.write("<h2>", "History Transaction", "</h2>");
    document.write("<ul>");

    for (let j = 0; j < card.transactions.length; j++) {
        let transaction = card.transactions[j];

        document.write("<li>", transaction.title, ", ", transaction.date, ",");

        // условный рендеринг
        if (transaction.amount > 0) {
            document.write('<span class="income">', transaction.amount, "</span>");
        } else {
            document.write('<span class="outcome">', transaction.amount, "</span>");
        }

        document.write("</li>");
    }

    document.write("</ul>");
    document.write("</div>");

    document.write("<hr>");
}