

export class Quote {
  constructor(data) {
    this.id = data.id
    this.content = data.content
    this.author = data.author
    this.tags = data.tags

  }
  get Template() {
    return /*html*/ `
    <div class="row max-height">
      <div class="col-12 d-flex flex-column h-25">
        <small>id: ${this.id}</small>
        <small>content: ${this.content}</small>
        <small>author: ${this.author}</small>
      </div>
    </div>
    `
  }
}
