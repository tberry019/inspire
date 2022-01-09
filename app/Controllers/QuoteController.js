import { quoteService } from "../Services/QuoteService.js"




export class QuoteController {
  constructor() {
    console.log('hello world from quote controller ')
    quoteService.getQuote()
  }
}