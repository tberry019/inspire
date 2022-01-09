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
}

export const quoteService = new QuoteService();