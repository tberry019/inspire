import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

// Need to set local storage name
export function saveState() {
  localStorage.setItem('Inspire', JSON.stringify({

    task: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Inspire'))
  console.log('load state data', data);
  if (data != null) {

    ProxyState.tasks = data.task.map(t => new Task(t))
    console.log('load state', ProxyState.tasks)
  }
}