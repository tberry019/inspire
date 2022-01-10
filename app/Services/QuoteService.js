import { sandboxQuotes } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js";

class QuoteService {
  async getQuote() {
    const res = await sandboxQuotes.get()
    console.log('res.data', res.data)
    ProxyState.quotes = res.data
    // console.log('Proxystate quote', ProxyState.quotes)

  }
  async getAuthor() {
    const res = await sandboxQuotes.get()


    ProxyState.author = res.data
    console.log('res.data', author)
  }
}



export const quoteService = new QuoteService();