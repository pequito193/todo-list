import { createNewProject } from "./newProject";
import { createNewTask } from "./newTask";
import { openPopup } from "./openNewTaskPopup";
import { closePopup } from "./closeNewTaskPopup";


// Allows the user to create a new project
const createProject = document.querySelector('.new-project')
createProject.addEventListener('click', createNewProject)


// Opens a popup window where the user can specify the details of the new task
const openTaskCreatorPopup = document.querySelector('.create-task')
openTaskCreatorPopup.addEventListener('click', openPopup)


// Gathers the new task's details and adds it to the task list table
const createTask = document.querySelector('.submit')
createTask.addEventListener('click', createNewTask)


// Closes new task popup incase the user decides not to create a new task
const close = document.querySelector('.trash-can')
close.addEventListener('click', closePopup)
