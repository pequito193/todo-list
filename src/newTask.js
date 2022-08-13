function createNewTask() {

    const newTaskName = document.querySelector('#task-name')
    const newTaskProject = document.querySelector('#project-name')
    const taskList = document.querySelector('.task-table')

    const newTask = document.createElement('tr')
        const taskName = document.createElement('td')
            taskName.textContent = newTaskName.textContent

        const dueDate = document.createElement('td')
            const dateQuery = document.createElement('input')
            dateQuery.classList.add('date-query')
            dateQuery.setAttribute('type', 'date')

        const projectName = document.createElement('td')
            // projectName.textContent = newTaskProject.value
           

        dueDate.append(dateQuery)


    newTask.append(taskName, dueDate, projectName)
    taskList.append(newTask)

    const popup = document.querySelector('.new-task-popup')
        popup.style.visibility = 'hidden'
        popup.classList.remove('show')

    const body = document.querySelector('.dark')
        body.style.visibility = 'hidden'
        body.classList.remove('opaque')
}

export {createNewTask};