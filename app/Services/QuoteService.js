import { sandboxQuotes } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"

class QuoteService {
  async getQuote() {
    const res = await sandboxQuotes.get()
    console.log('res.data')
  }
}

export const quoteService = new QuoteService