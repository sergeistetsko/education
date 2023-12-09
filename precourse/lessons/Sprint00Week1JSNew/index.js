// part 1
const h1Element = document.createElement('h1')
h1Element.append('Hello from IT-incubator')
document.body.append(h1Element)

// part 2
// data
/*
let title = 'it-incubator'
let graduatesCount = 2000
let areYouChampion = true
*/
const incubatorInfo = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: ['Front', 'Back', 'DevOps']    
}

// render
let pageTitleElement = document.createElement('h1')
pageTitleElement.innerText = incubatorInfo.title
document.body.append(pageTitleElement)

let graduatesCountElement = document.createElement('input')
graduatesCountElement.value = incubatorInfo.graduatesCount
graduatesCountElement.type = 'number'
document.body.append(graduatesCountElement)

let areYouChampionElement = document.createElement('input')
areYouChampionElement.type = 'checkbox'
areYouChampionElement.checked = incubatorInfo.areYouChampion
document.body.append(areYouChampionElement)

// part 3
let techSelectElement = document.createElement('select')
let techSelectOptions0Element = document.createElement('option')
techSelectOptions0Element.append(incubatorInfo.technologies[0])
let techSelectOptions1Element = document.createElement('option')
techSelectOptions1Element.append(incubatorInfo.technologies[1])
let techSelectOptions2Element = document.createElement('option')
techSelectOptions2Element.append(incubatorInfo.technologies[2])

techSelectElement.append(techSelectOptions0Element, techSelectOptions1Element, techSelectOptions2Element)
document.body.append(techSelectElement)