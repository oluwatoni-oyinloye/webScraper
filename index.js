const PORT = 8000
const express = require('express')
const axioa = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req:Request<>))

app.listen(PORT, () => console.log(`All good on server ${PORT}`))