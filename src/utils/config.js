let baseURL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://api-dot-directed-beacon-342715.lm.r.appspot.com'
}

export {
  baseURL
}