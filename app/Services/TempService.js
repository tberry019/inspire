import { ProxyState } from "../AppState.js"
import { Temperature } from "../Models/Temperature.js"
import { sandboxWeather } from "./AxiosService.js";



class TempService {
  async getTemperature() {
    const res = await sandboxWeather.get()
    console.log('res.data')
    ProxyState.temperature = res.data.map(t => new Temperature(t))
    console.log('Proxystate temperature', ProxyState.temperature)
  }

}




export const tempService = new TempService()