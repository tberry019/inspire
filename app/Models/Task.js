import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.model = data.model
    this.listItemId = data.listItemId
    this.quantity = data.quantity
    this.completed = data.completed || false
    this.description = data.description
  }

  get Template() {
    return /*html */`
    <div class="p-2  ">
      <div class="bg-white text-dark   fs-4">
        <div class="p-3">
          <div class="m-0">
          <input class="form-check-input" id="completed" type="checkbox" ${!this.completed ? 'checkbox' : `checked`} name="" value="something" onclick="app.taskController.checkTaskItem('${this.id}')" />        
          <label for="completed">${this.description}</label>
            <i class="mdi mdi-delete mdi-10px selectable text-danger" onclick="app.taskController.deleteTask('${this.id}')"></i> 
          </div>

        </div>
      </div>
    </div>`
  }
}
