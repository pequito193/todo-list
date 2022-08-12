function createNewProject() {
    const projectList = document.querySelector('.projects')
    const newProject = document.createElement('button')
    newProject.classList.add('project')
    newProject.textContent = prompt('New project name:')
    projectList.append(newProject)
}

export {createNewProject};