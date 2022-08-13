/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ \"./src/newTask.js\");\n/* harmony import */ var _openNewTaskPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openNewTaskPopup */ \"./src/openNewTaskPopup.js\");\n\n\n\n\n\nconst createProject = document.querySelector('.new-project')\ncreateProject.addEventListener('click', _newProject__WEBPACK_IMPORTED_MODULE_0__.createNewProject)\n\nconst openTaskCreatorPopup = document.querySelector('.create-task')\nopenTaskCreatorPopup.addEventListener('click', _openNewTaskPopup__WEBPACK_IMPORTED_MODULE_2__.openPopup)\n\nconst createTask = document.querySelector('.submit')\ncreateTask.addEventListener('click', _newTask__WEBPACK_IMPORTED_MODULE_1__.createNewTask)\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject)\n/* harmony export */ });\nfunction createNewProject() {\n\n    const projectList = document.querySelector('.projects')\n\n    const newProject = document.createElement('button')\n        newProject.classList.add('project')\n        newProject.textContent = prompt('New project name:')\n\n        \n    projectList.append(newProject)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/newProject.js?");

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask)\n/* harmony export */ });\nfunction createNewTask() {\n\n    const newTaskCreator = document.querySelector('.new-task-popup')\n    const newTaskName = document.querySelector('#task-name')\n    const taskList = document.querySelector('.task-table')\n\n    const newTask = document.createElement('tr')\n        const taskName = document.createElement('td')\n            taskName.textContent = newTaskName.innerHTML\n\n        const dueDate = document.createElement('td')\n            const dateQuery = document.createElement('input')\n            dateQuery.classList.add('date-query')\n            dateQuery.setAttribute('type', 'date')\n\n        const projectName = document.createElement('td')\n            const projectQuery = document.createElement('input')\n            projectQuery.classList.add('project-query')\n           \n\n        taskName.append(nameQuery)\n        dueDate.append(dateQuery)\n        projectName.append(projectQuery)\n\n\n    newTask.append(taskName, dueDate, projectName)\n    taskList.append(newTask)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/newTask.js?");

/***/ }),

/***/ "./src/openNewTaskPopup.js":
/*!*********************************!*\
  !*** ./src/openNewTaskPopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup() {\n    \n    const popup = document.querySelector('.new-task-popup')\n        popup.style.visibility = 'visible'\n        popup.classList.add('show')\n\n    const body = document.querySelector('.dark')\n    body.style.visibility = 'visible'\n    body.classList.add('opaque')\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/openNewTaskPopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;