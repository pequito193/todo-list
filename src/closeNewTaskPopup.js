function closePopup() {

    const popup = document.querySelector('.new-task-popup')
        popup.style.visibility = 'hidden'
        popup.classList.remove('show')

    const body = document.querySelector('.dark')
        body.style.visibility = 'hidden'
        body.classList.remove('opaque')

    const taskInput = document.querySelector('#task-name')
    taskInput.value = ''
}

export {closePopup};