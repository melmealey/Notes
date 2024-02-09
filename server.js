const express = require('express')
const fs = require('fs')
const path = require('path')

const PORT = 3002

const app = express()

app.use(express.static('public'))
app.use(express.json())

// Import the feedback router
const api = require('./routes/index')

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api)

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
)