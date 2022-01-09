

export class Question {
  constructor(data) {
    this.id = data.id
    this.answer = data.answer
    this.question = data.question
    this.value = data.value
    this.category = data.category.title
    this.airDate = data.airdate
  }