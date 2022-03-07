require(`dotenv`).config();

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY

module.exports = {
  PORT,
  MONGODB_URI,
  RAPIDAPI_KEY
}