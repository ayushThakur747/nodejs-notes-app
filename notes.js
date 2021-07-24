const fs = require('fs');

const getNotes = function(){
    return 'notes....';
}
const addNotes = function(title, body){
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
    }

}

const removedNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title!==title);
    saveNotes(notesToKeep);
}

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
    const note = notes.find((note)=>note.title === title);
    if(note!==undefined){
        console.log("title:",note.title," body:",note.body);
    }else{
        console.log(`note with title ${title} not found`);
    }
}
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
    getNotes,
    addNotes,
    removedNotes,
    listNotes,  
    readNote,
}