import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";
import { sandboxList } from "./AxiosService.js";


class TaskService {
  constructor() {
    ProxyState.on('tasks', saveState)
  }
  addValue() {
    ProxyState.tasks = [...ProxyState.tasks, new Task({ title: Math.random() })]
  }
  deleteTaskItem(id) {
    const task = ProxyState.tasks.filter(t => t.id !== id)
    ProxyState.tasks = task
  }
  createTask(newTask) {
    ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks]
    // console.log('tasks in task serv', ProxyState.tasks);

  }
  checkTaskItem(id) {
    const task = ProxyState.tasks.find(t => t.id == id)
    // ProxyState.tasks = task
    console.log('checking task', task)

    if (task.completed == true) {
      task.completed = false

    }
    else if (task.completed == !true) {
      task.completed = true

    }
    ProxyState.tasks = ProxyState.tasks
  }

  async addTask(newTask) {
    const res = await sandboxList.post('', newTask)
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
    console.log('ProxyState tasks', ProxyState.tasks);
  }

  async removeTask(id) {
    const res = await sandboxList.delete(id)
    console.log(res.data)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
  }
  async loadTask() {
    const tasks = ProxyState.tasks
    //change locally
    task.load = !task.load
    // save change to server
    const res = await sandboxList.put(task.id, task)
    ProxyState.tasks = ProxyState.tasks
  }
}












export const taskService = new TaskService();