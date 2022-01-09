import { backGroundService } from "../Services/BackGroundService.js"
import { ProxyState } from "../AppState.js"


function drawBackGround() {
  let backGround = ProxyState.backGround
  document.body.style.background = `url('${backGround}')`

}


export class BackGroundController {
  constructor() {

    ProxyState.on('backGround', drawBackGround)
    backGroundService.getBackGroundImage()
  }
}