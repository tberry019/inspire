import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";


class ListService {
  constructor() {
    ProxyState.on('lists', saveState)
  }


}