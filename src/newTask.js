function createNewTask() {

    const newTaskName = document.querySelector('#task-name')
    const newTaskProject = document.querySelector('#project-name')
    const taskList = document.querySelector('.task-table')

    if (newTaskName.value.length > 0 && newTaskName.value.length < 33) {
        console.log(newTaskName.value.length)
        const newTask = document.createElement('tr')
            const taskName = document.createElement('td')
                const deleteImage = document.createElement('img')
                deleteImage.setAttribute('src', './images/trash-can.png')
                deleteImage.classList.add('trash-can-task')
                const text = newTaskName.value
                taskName.append(deleteImage, text)

            const dueDate = document.createElement('td')
                const dateQuery = document.createElement('input')
                dateQuery.classList.add('date-query')
                dateQuery.setAttribute('type', 'date')

            const projectName = document.createElement('td')
                projectName.textContent = newTaskProject.value
            

            dueDate.append(dateQuery)


        newTask.append(taskName, dueDate, projectName)
        taskList.append(newTask)

        const popup = document.querySelector('.new-task-popup')
            popup.style.visibility = 'hidden'
            popup.classList.remove('show')

        const body = document.querySelector('.dark')
            body.style.visibility = 'hidden'
            body.classList.remove('opaque')

        newTaskName.value = ''
    } else {
        alert('TASK NAME MUST HAVE BETWEEN 1 AND 32 CHARACTERS')
    }
}

export {createNewTask};