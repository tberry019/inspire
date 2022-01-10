
import { BackGroundController } from "./Controllers/BackGroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/TaskController.js";
import { TempController } from "./Controllers/TempController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";




class App {
  valuesController = new ValuesController();

  taskController = new TaskController();

  backGrondController = new BackGroundController();

  tempController = new TempController();

  quoteController = new QuoteController();
}

window["app"] = new App();
