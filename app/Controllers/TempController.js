import { tempService } from "../Services/TempService.js"
import { ProxyState } from "../AppState.js"
import { Temperature } from "../Models/Temperature.js"


// function drawTemperature() {
//   let template = ''
//   ProxyState.temperature.forEach(t => template += t.Template)
//   document.getElementById('temperature').innerHTML = template
// }
export class TempController {
  constructor() {
    // console.log('hello world from temp controller')
    tempService.getTemperature()
    ProxyState.on('temperature', _drawTemperature)
  }

}

function _drawTemperature() {
  let temperature = ProxyState.temperature
  document.getElementById("temperature").innerHTML = `<h3>Temp: ${temperature}</h3>`
}