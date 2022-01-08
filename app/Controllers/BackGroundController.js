import { backGroundService } from "../Services/BackGroundService.js"
import { ProxyState } from "../AppState.js"


function drawBackGround() {
  let template = ''
  ProxyState.backGround.forEach(b => template += b.Template)
  document.getElementById('background').innerHTML = template

}


export class BackGroundController {
  constructor() {

    ProxyState.on('backGround', drawBackGround)
    backGroundService.getBackGroundImage()
  }
}