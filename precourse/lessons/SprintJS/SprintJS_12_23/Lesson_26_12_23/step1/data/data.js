export const data = {
    todolist: {
        id: createUniqId(),
        title: 'to Learn',
        tasks: [
            {
                id: createUniqId(),
                title: 'Learn HTML',
            },
            {
                id: createUniqId(),
                title: 'Learn CSS',
            }
        ]
    }
}

function createUniqId() {
    return Math.floor(Math.random() * 10000)
}