const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fs-utils')
const uuid = require('../helpers/uuid');


router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
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

router.delete('/notes/:id', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => {
//loop through notes and remove selected id
//write the rest of the notes back to the JSON file
//use writetoFile function 

    res.json(JSON.parse(data))
  }
  );
})

module.exports = router


