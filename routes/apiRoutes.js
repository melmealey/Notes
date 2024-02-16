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

// router.delete('/notes/:id', (req, res) => {
//   const noteId = req.params.id;

//   readFromFile('./db/db.json').then((data) => {
//     let notes = JSON.parse(data);

//     // Find the index of the note with the specified id
//     const noteIndex = notes.findIndex((note) => note.note_id === noteId);

//     if (noteIndex !== -1) {
//       // Remove the note from the array
//       notes.splice(noteIndex, 1);

//       // Write the updated notes back to the file
//       fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
//         if (err) {
//           res.status(500).json({ error: 'Failed to delete note' });
//         } else {
//           res.json({ message: 'Note deleted successfully' });
//         }
//       });
//     } else {
//       res.status(404).json({ error: 'Note not found' });
//     }
//   }).catch((err) => {
//     res.status(500).json({ error: 'Failed to delete note' });
//   });
// });
no
// router.delete('/notes/:id', (req, res) => {
//   console.info(`${req.method} request received for notes`);
//   readFromFile('./db/db.json').then((data) => {
// //loop through notes and remove selected id
// //write the rest of the notes back to the JSON file
// //use writetoFile function 

//     res.json(JSON.parse(data))
//   }
//   );
// })

module.exports = router


