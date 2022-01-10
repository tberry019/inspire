

export class Temperature {
  constructor(data) {
    this.temp = data.main.temp
    // this.f = this.temp - google formula
    this.c = data.weather
    this.wind = data.wind
    this.clouds = data.clouds

  }


}