// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true
}

// renderPlaylists
let pageTitleElement = document.createElement('h1');

pageTitleElement.innerText = info.title;

document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');

graduatesCountElement.value = info.graduatesCount;

document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');

areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;

document.body.append(areYouChampionElement);

