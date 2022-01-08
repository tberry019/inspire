
import { BackGroundController } from "./Controllers/BackGroundController.js";
import { TaskController } from "./Controllers/TaskController.js";
import { ValuesController } from "./Controllers/ValuesController.js";


class App {
  valuesController = new ValuesController();

  taskController = new TaskController();

  backGrondController = new BackGroundController();
}

window["app"] = new App();
