export const data = {
    id: crypto.randomUUID(),
    todolist: {
        title: 'Todolist:',
        tasks: [
            {
                id: crypto.randomUUID(),
                title: 'Learn HTML'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn CSS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn JS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn React'
            }
        ]
    }
}

let notifySubscriber = null

export function subscribe(subscriber) {
    notifySubscriber = subscriber
}

export function deleteTask(taskId) {
    const tasksAfterDelete = []
    const tasks = data.todolist.tasks
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== taskId) {
            tasksAfterDelete.push(tasks[i])
        }
    }
    data.todolist.tasks = tasksAfterDelete
    notifySubscriber()
}