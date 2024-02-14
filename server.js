const express = require('express')
const fs = require('fs')
const path = require('path')

const PORT = 3333

const app = express()

app.use(express.static('public'))
app.use(express.json())

// Import the feedback router
const routes = require('./routes/index')

// Send all the requests that begin with /api to the index.js in the routes folder
app.use(routes)


//Starts the server to begin listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
)

