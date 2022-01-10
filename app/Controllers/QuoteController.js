import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"



function drawQuote() {
  let quote = ProxyState.quotes
  let template = ''
  // quote.forEach(q => template += q.Template)
  // document.getElementById('quote').innerHTML = template
  document.getElementById("quote").innerHTML = `<h3>Quote: "${quote.content}"</h3>`
}

function drawAuthor() {
  let author = ProxyState.author
  let template = ''
  document.getElementById("author").innerHTML = `<h3>Author: ${author.author}</h3>`
}

export class QuoteController {
  constructor() {
    // console.log('hello world from quote controller ')
    quoteService.getQuote()
    quoteService.getAuthor()
    ProxyState.on('quotes', drawQuote)
    ProxyState.on('author', drawAuthor)

  }
}

