import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"



function drawQuote() {
  let quote = ProxyState.quotes
  document.getElementById("quote").innerHTML = `<h3>Quote:${quote.content}</h3>`
}

export class QuoteController {
  constructor() {
    // console.log('hello world from quote controller ')
    quoteService.getQuote()
    ProxyState.on('quotes', drawQuote)
  }
}
