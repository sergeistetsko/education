// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: ['Front', 'Back', 'DevOps']
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

let techSelectElement = document.createElement('select');

let techSelectOption0Element= document.createElement('option');
techSelectOption0Element.append(info.technologies[0]);
techSelectElement.append(techSelectOption0Element);

let techSelectOption1Element= document.createElement('option');
techSelectOption1Element.append(info.technologies[1]);
techSelectElement.append(techSelectOption1Element);

let techSelectOption2Element= document.createElement('option');
techSelectOption2Element.append(info.technologies[2]);
techSelectElement.append(techSelectOption2Element);

document.body.append(techSelectElement);

