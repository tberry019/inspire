import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"



function drawQuote() {
  let template = ''
  ProxyState.quotes.forEach(q => template += q.Template)
  document.getElementById('quote').innerHTML = template

}

export class QuoteController {
  constructor() {
    console.log('hello world from quote controller ')
    quoteService.getQuote()
    ProxyState.on('quotes', drawQuote)
  }
}