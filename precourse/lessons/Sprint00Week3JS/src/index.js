import {getCurrentUser, getCards} from './data.js'
import {renderHeader} from './components/header.js'
import {renderCards} from './components/cards/card.js'

const currentUser = getCurrentUser();
const cards = getCards();

const rootElement = document.querySelector('#root');

const headerElement = renderHeader(currentUser.name, currentUser.balance);
rootElement.appendChild(headerElement);

const cardsElement = renderCards(cards);
rootElement.appendChild(cardsElement);

