import { createNewProject } from "./newProject";
import { createNewTask } from "./newTask";
import { openPopup } from "./openNewTaskPopup";


const createProject = document.querySelector('.new-project')
createProject.addEventListener('click', createNewProject)

const openTaskCreatorPopup = document.querySelector('.create-task')
openTaskCreatorPopup.addEventListener('click', openPopup)

const createTask = document.querySelector('.submit')
createTask.addEventListener('click', createNewTask)
