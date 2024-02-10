const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } =require ('../helpers/fs-utils')
const uuid = require('../helpers/uuid');


notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
})

module.exports = notesRouter


