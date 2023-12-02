export function getCurrentUser() {
    let newUser = {
        name: "Alex",
        role: "Admin",
        balance: 100,
    };
    return newUser;
}

let card1 = {
    id: 1,
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
    id: 2,
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
    id: 3,
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

let dataChangedEventListener = function () {
}


export function addEventListener(listener) {
    dataChangedEventListener = listener;
}


export function getCards() {
    return cards;
}

export function createCard(cardNumber, newCardType) {
    let newCard = {
        id: Number(new Date()),
        type: "debit",
        networkType: newCardType,
        currencyType: "USD",
        currentBalance: 0,
        number: cardNumber,
        expirationYear: 0,
        expirationMonth: 0,
        isActive: false,
        transactions: [],
    };
    cards.unshift(newCard);
    dataChangedEventListener();
}

export function updateCard(id, newCardNumber, newCardType) {
    const card = cards.find(card => card.id === id);
    card.number = newCardNumber;
    card.networkType = newCardType;
    dataChangedEventListener();
}