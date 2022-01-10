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

function cToF(temperature) {
  var cTemp = temperature;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  console.log(message);
}

function fToC(temperature) {
  var fTemp = temperature;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  console.log(message);
}
cToF(60);
fToC(45);