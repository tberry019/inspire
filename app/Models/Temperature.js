

export class Temperature {
  constructor(data) {
    this.temp = data.main.temp
    this.lon = data.coord.lon
    this.weather = data.weather
    this.wind = data.wind
    this.clouds = data.clouds

  }


}