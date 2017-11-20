console.log('starting notes.js ...');

const fs = require('fs');
const notesFile = 'playground/notes.json';

const readNotes = () => {
    var notes = [];
    try {
        notes = JSON.parse(fs.readFileSync(notesFile));
    } catch (e) {

    }
    return notes;
}

const writeNotes = (notes) => {
    fs.writeFileSync(notesFile, JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = readNotes();

    var duplicateNotes = notes.filter( (note)=>{
      return note.title==title;
    });

    if(duplicateNotes.length==0) {
      notes.push({
          title,
          body
      });
      writeNotes(notes);
    }
};

var getAll = () => {
    var notes = readNotes();
    console.log('All Notes:', notes);
};

var getNote = (title) => {
    var notes = readNotes();
    console.log('All Notes:', notes);
};

var removeNote = (title) => {
    var notes = readNotes();

};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};