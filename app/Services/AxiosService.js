
// @ts-ignore
export const sandboxList = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/TBerry/todos',
  timeout: 8000
})

export const sandboxWeather = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 8000
})

export const sandboxQuotes = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 8000
})

export const sandboxImages = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 8000
})