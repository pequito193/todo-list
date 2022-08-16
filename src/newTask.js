function createNewTask() {

    const newTaskName = document.querySelector('#task-name')
    const newTaskProject = document.querySelector('#project-name')
    const taskList = document.querySelector('.task-table')

    if (newTaskName.value.length > 0 && newTaskName.value.length < 81) {
        console.log(newTaskName.value.length)
        const newTask = document.createElement('tr')
            const taskName = document.createElement('td')
                const text = newTaskName.value
                taskName.append(text)

            const dueDate = document.createElement('td')
                const dateQuery = document.createElement('input')
                dateQuery.classList.add('date-query')
                dateQuery.setAttribute('type', 'date')
            

            dueDate.append(dateQuery)


        newTask.append(taskName, dueDate)
        taskList.append(newTask)

        const popup = document.querySelector('.new-task-popup')
            popup.style.visibility = 'hidden'
            popup.classList.remove('show')

        const body = document.querySelector('.dark')
            body.style.visibility = 'hidden'
            body.classList.remove('opaque')

        newTaskName.value = ''
    } else {
        alert('TASK NAME MUST HAVE BETWEEN 1 AND 80 CHARACTERS')
    }
}

export {createNewTask};