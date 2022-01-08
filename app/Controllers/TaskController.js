import { taskService } from "../Services/TaskService.js"
import { getTaskForm } from "../Components/TaskForm.js"
import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

function _drawTask() {
  //const lists = ProxyState.lists
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
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
    // console.log('hello from task controller')
    window.event.preventDefault()
    let form = window.event.target
    const newTask = {
      title: form.title.value,
      // listItemId: listItemId
    }
    taskService.createTask(newTask)
    // console.log('list item obj', newTask);
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

  // deleteTaskItem(taskItemID) {
  //   console.log('task item id', taskItemId);
  //   if (confirm("Are you sure you want to delete this task?") == true) {
  //     taskService.deleteTaskItem(taskItemId)
  //   }
  // }

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
}

