export class BackGround {
  constructor(data) {
    this.url = data.largeImgUrl

  }
  get Template() {
    return /*html*/ `
    <main class=${this.url}>
    `
  }
}
