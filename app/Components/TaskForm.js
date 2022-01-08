
export function getTaskForm() {
  return /*html */ `
    <form onsubmit="app.TaskController.addTask()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="title" class="form-label">Title</label>
        <input class ="text-wrap form-control" type="text" minlength="3" maxlength="10" required name="make" id="title"
            aria-describedby="title" placeholder="title...">
      </div>
    </div>
  </form>
    `
}