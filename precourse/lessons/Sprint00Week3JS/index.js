const currentUser = getCurrentUser();
const cards = getCards();

const rootElement = document.querySelector('#root');
renderHeader(currentUser.name, currentUser.balance);
renderCards(cards);

function getCurrentUser() {
  let newUser = {
    name: "Alex",
    role: "Admin",
    balance: 100,
  };
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

function renderHeader(userName, userBalance) {
  const h1Element = document.createElement('h1');
  h1Element.innerText = `Hello, ${userName}, balance: ${userBalance}`
  rootElement.appendChild(h1Element);
}

function renderCards(cards) {
  renderCardsHeader();

  for (let i = 0; i < cards.length; i++) {
    const divElement = document.createElement('div');
   
    const cardElement = createCardElement(cards[i]);

    divElement.appendChild(cardElement);

    const transactionsElement = createCardTransactionsElement(cards[i].transactions);
    divElement.appendChild(transactionsElement);

    rootElement.appendChild(divElement);
    
  }
}

function renderCardsHeader() {
  document.write("<h2>", "Cards: ", "</h2>");
}

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card-block');

  const cardTypeElement = document.createElement('b');
  cardTypeElement.innerText = card.type + " card";

  cardElement.appendChild(cardTypeElement);

  const br1 = document.createElement('br');

  cardElement.appendChild(br1);

  let networkLogo = document.createElement('img');
   switch (card.networkType) {
    case "visa":
      networkLogo.src = "visa_logo.png";
      break;
    case "mastercard":
      networkLogo.src = "mastercard_logo.png";
      break;
  }

  cardElement.appendChild(networkLogo)

  cardElement.appendChild(document.createElement('br')); 


  let currentBalance = document.createElement('b');
  currentBalance.innerText = 'current balance:';
  cardElement.appendChild(currentBalance)
  

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

  let currentBalanceValueElement = document.createElement('span');
  currentBalanceValueElement.innerText =  currencySign + card.currentBalance;
  cardElement.appendChild(currentBalanceValueElement)

  cardElement.appendChild(document.createElement('br'));

  let cardNumberElement = document.createElement('h4');
  cardNumberElement.innerText =  card.number;
  cardElement.appendChild(cardNumberElement);

  let expirationDateElement = document.createElement('span');
  expirationDateElement.innerText =   card.expirationMonth + '/' + card.expirationYear;
  cardElement.appendChild(expirationDateElement);
  return cardElement;
}

function createCardTransactionsElement(transactions) {
  let historyTransactionsContainer = document.createElement('div');
  
  let historyTransactionTitleElement = document.createElement('h2');
  historyTransactionTitleElement.innerText =  'History Transaction';
  historyTransactionsContainer.appendChild(historyTransactionTitleElement);

  historyTransactionsContainer.appendChild(historyTransactionTitleElement);

  const ulElement = document.createElement('ul');
  
  for (let j = 0; j < transactions.length; j++) {
      const transactionElement = createTransactionElement(transactions[j])
      ulElement.appendChild(transactionElement);
  }

  historyTransactionsContainer.appendChild(ulElement);

  return historyTransactionsContainer;
}

function createTransactionElement(transaction) {
  const transactionElement = document.createElement('li');
  transactionElement.innerText = transaction.title + ", " + transaction.date;
 
  let amountElement = document.createElement('span');
  
  amountElement.innerText =  transaction.amount;
  if (transaction.amount > 0) {
    amountElement.classList.add('income');
  } else {
    amountElement.classList.add('outcome');
  }
  transactionElement.appendChild(amountElement);

  return transactionElement;
}