// data
const title = 'it-incubator';
const graduatesCount = 2000;
const areYouChampion = true;

// renderPlaylists
let pageTitleElement = document.createElement('h1');

pageTitleElement.innerText = title;

document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');

graduatesCountElement.type = 'number';
graduatesCountElement.value = graduatesCount;

document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');

areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = areYouChampion;

document.body.append(areYouChampionElement);

