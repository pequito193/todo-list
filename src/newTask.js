function createNewTask() {

    const newTaskCreator = document.querySelector('.new-task-popup')
    const newTaskName = document.querySelector('#task-name')
    const taskList = document.querySelector('.task-table')

    const newTask = document.createElement('tr')
        const taskName = document.createElement('td')
            taskName.textContent = newTaskName.innerHTML

        const dueDate = document.createElement('td')
            const dateQuery = document.createElement('input')
            dateQuery.classList.add('date-query')
            dateQuery.setAttribute('type', 'date')

        const projectName = document.createElement('td')
            const projectQuery = document.createElement('input')
            projectQuery.classList.add('project-query')
           

        taskName.append(nameQuery)
        dueDate.append(dateQuery)
        projectName.append(projectQuery)


    newTask.append(taskName, dueDate, projectName)
    taskList.append(newTask)
}

export {createNewTask};