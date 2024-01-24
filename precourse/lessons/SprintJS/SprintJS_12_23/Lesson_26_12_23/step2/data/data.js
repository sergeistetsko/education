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
            },

        ],
        isAddDialogOpen: false
    }
}

export function openAddTaskDialog() {
    data.todolist.isAddDialogOpen = true
    notifySubscriber()
}

export function closeAddTaskDialog() {
    data.todolist.isAddDialogOpen = false
    notifySubscriber()
}

let notifySubscriber = null

export function subscriber(subscriber) {
    notifySubscriber = subscriber
}

function createUniqId() {
    return Math.floor(Math.random() * 10000)
}

export function createTask(newTitle) {
    const newTask = {
        id: createUniqId(),
        title: newTitle
    }
    data.todolist.tasks.push(newTask)
    notifySubscriber()
}

export function deleteTask(id) {
    data.todolist.tasks = data.todolist.tasks.filter(task => task.id !== id)
    notifySubscriber()
}