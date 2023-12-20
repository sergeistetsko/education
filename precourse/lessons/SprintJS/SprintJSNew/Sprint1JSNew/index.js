// Создание элемента и добавление его в DOM (апенд в body)
const h1Element = document.createElement('h1')

h1Element.append('Hello from IT-incubator')
document.body.append(h1Element)

// Создание объекта
const incubatorInfo = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        { title: 'Front' },
        { title: 'Back' },
        { title: 'DevOps' }
    ]
}

// Создание элементов и добавление их в DOM
// Создание элемента h1 и добавление его в body
let pageTitleElement = document.createElement('h1')

pageTitleElement.innerText = incubatorInfo.title

document.body.append(pageTitleElement)

// Создание элемента input, добавление ему атрибутов и добавление его в body
let graduatesCountElement = document.createElement('input')

graduatesCountElement.value = incubatorInfo.graduatesCount
graduatesCountElement.type = 'number'

document.body.append(graduatesCountElement)

// Создание элемента input, добавление ему атрибутов и добавление его в body
let areYouChampionElement = document.createElement('input')

areYouChampionElement.type = 'checkbox'
areYouChampionElement.checked = incubatorInfo.areYouChampion

document.body.append(areYouChampionElement)

// Создание элемента select, его options и добавление его в body
let techSelectElement = document.createElement('select')

let techSelectOptions0Element = document.createElement('option')
techSelectOptions0Element.append(incubatorInfo.technologies[0].title)

let techSelectOptions1Element = document.createElement('option')
techSelectOptions1Element.append(incubatorInfo.technologies[1].title)

let techSelectOptions2Element = document.createElement('option')
techSelectOptions2Element.append(incubatorInfo.technologies[2].title)

techSelectElement.append(techSelectOptions0Element, techSelectOptions1Element, techSelectOptions2Element)
document.body.append(techSelectElement)