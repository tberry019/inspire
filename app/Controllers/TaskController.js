import { taskService } from "../Services/TaskService.js"
import { getTaskForm } from "../Components/TaskForm.js"
import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"




function _drawTask() {
  //const lists = ProxyState.lists
  let task = ProxyState.tasks
  let template = ''
  task.forEach(t => template += t.Template)
  document.getElementById('task').innerHTML = template
}

function _drawTaskForm() {
  document.getElementById('modal-body-slot').innerHTML = getTaskForm()
}
export class TaskController {
  constructor() {
    ProxyState.on('tasks', _drawTask)
  }
  createTask() {
    window.event.preventDefault()
    let form = window.event.target
    const newTask = {
      title: form.title.value,
    }
    taskService.createTask(newTask)
  }
  drawTaskForm() {
    _drawTaskForm()
  }
  checkTaskItem(taskItemId) {
    console.log('checked item!', taskItemId);
    if (confirm("This task has been completed") == true) {
      taskService.checkTaskItem(taskItemId)
    }

  }
  async addTask() {
    try {
      window.event.preventDefault()

      let form = window.event.target
      const newTask = {
        description: form.description.value
      }
      console.log('new task obj', newTask)
      await taskService.addTask(newTask)
      form.reset()
    } catch (error) {
      console.log(error.message)
    }
  }
  async deleteTask(id) {
    try {
      if (confirm("Are you sure you want to delete this list?") == true) {

        await taskService.removeTask(id)
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  async loadTasks() {
    try {
      await taskService.loadTask()
    } catch (error) {
      console.error(error)
    }
  }
}

