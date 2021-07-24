const fs = require('fs');

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.find((note)=> note.title===title);
    
    if(duplicateNotes!==undefined){
        console.log('Note title already exists! ');
    }else{
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log("note added!");
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);
    console.log("Not with title " + title + " has been deleted!");
  };

const listNotes = function(){
    const notes = loadNotes();
    notes.forEach((note)=>console.log(note.title))
}

const saveNotes = function(notes){

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}

const readNote = function(title){
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    
    if(note!==undefined){
        console.log("title:",note.title," body:",note.body);
    }else{
        console.log(`note with title ${title} not found`);
    }
  };


const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);       
    } catch (error) {
        return [];
    }

}
module.exports = {
    addNote,
    removeNote,
    listNotes,  
    readNote,
}