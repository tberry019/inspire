

export class Temperature {
  constructor(data) {
    this.coord = data.coord
    this.weather = data.weather
    this.wind = data.wind
    this.clouds = data.clouds
    // this.category = data.category.title
    // this.airDate = data.airdate
  }

  get Template() {
    return /*html*/ `
    <div class="row max-height">
      <div class="col-12 d-flex flex-column h-25">
        <small>Coord: ${this.coord}</small>
        <small>weather: ${this.weather}</small>
        <small>wind: ${this.wind} </small>
      </div>
    </div>
    `
  }
}