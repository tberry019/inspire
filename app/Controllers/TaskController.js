import { taskService } from "../Services/TaskService.js"
import { getTaskForm } from "../Components/TaskForm.js"
import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"




function _drawTask() {
  //const lists = ProxyState.lists
  let tasks = ProxyState.tasks
  let template = ''
  let count = 0
  tasks.forEach(t => template += t.Template)

  //if completed increase count by 1
  document.getElementById('task').innerHTML = template
}

function _drawTaskForm() {
  document.getElementById('modal-body-slot').innerHTML = getTaskForm()
}
export class TaskController {
  constructor() {
    ProxyState.on('tasks', _drawTask)
    taskService.loadTask()

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
      // console.log('new task obj', newTask)
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

}

