import { createNewProject } from "./newProject";
import { createNewTask } from "./newTask";


const createProject = document.querySelector('.new-project')
createProject.addEventListener('click', createNewProject)

const createTask = document.querySelector('.create-task')
createTask.addEventListener('click', createNewTask)

// const newTaskName = document.querySelector('.name-query')
// newTaskName.addEventListener('keydown', e => {
//     if (e.code === 'Enter') {
//         newTaskName.parentElement.textContent = newTaskName.value
//         newTaskName.parentElement.removeChild(newTaskName)
//     }
// })