function createNewTask() {

    const taskList = document.querySelector('.task-table')

    const newTask = document.createElement('tr')
        const taskName = document.createElement('td')
            const nameQuery = document.createElement('input')
            nameQuery.classList.add('name-query')
            nameQuery.setAttribute('type', 'text')

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