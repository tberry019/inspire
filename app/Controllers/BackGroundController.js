import { backGroundService } from "../Services/BackGroundService"


function drawBackGround() {
  let template = ''
  ProxyState.backGround.forEach(b => template += b.Template)
  document.getElementById('background').innerHTML = template

}


export class BackGroundController {
  constructor() {

    ProxyState.on('background', drawBackGround)
    backGroundService.getBackGroundService()
  }
}