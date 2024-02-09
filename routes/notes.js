
const notesRouter = require('express').Router()


notesRouter.get('/', (req, res) => {
    // console.log('Something')
})


notesRouter.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = notesRouter