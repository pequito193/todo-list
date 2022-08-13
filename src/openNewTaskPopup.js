function openPopup() {
    
    const popup = document.querySelector('.new-task-popup')
        popup.style.visibility = 'visible'
        popup.classList.add('show')

    const body = document.querySelector('.dark')
    body.style.visibility = 'visible'
    body.classList.add('opaque')
}

export {openPopup};