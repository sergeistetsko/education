import {getCurrentUser, getCards, addEventListener} from './data.js'
import {renderHeader} from './components/header.js'
import {Cards} from './components/cards/card.js'


// addEventListener(renderApp);
addEventListener(renderApp);

function logData() {
    console.log('DATA CHANGED');
    console.log(getCards());
}

export function renderApp() {
    const currentUser = getCurrentUser();
    const cards = getCards();

    const rootElement = document.querySelector('#root');
    rootElement.innerHTML = '';

    const headerElement = renderHeader(currentUser.name, currentUser.balance);
    rootElement.appendChild(headerElement);

    const cardsElement = Cards(cards, renderApp);
    rootElement.appendChild(cardsElement);
}

renderApp();
