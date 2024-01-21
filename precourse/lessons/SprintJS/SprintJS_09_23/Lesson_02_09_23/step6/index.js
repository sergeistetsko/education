let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]

console.log(tasks.map(objectElement => objectElement.id === 2 ? {...objectElement, title: 'I like JS'} : objectElement))

const newObjectElement = {id: 4, title: "Next", isDone: false }

console.log([...tasks, newObjectElement])