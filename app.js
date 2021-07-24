const yargs = require('yargs');
const {addNote,removeNote,listNotes,readNote} = require('./notes');

yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Note body",
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv){
        addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:"remove",
    describe:"remove a note",
    builder:{
        title:{
            describe:"Note title to Delete",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        removeNote(argv.title);
    }
})

yargs.command({
    command:"list",
    describe:"list notes",
    handler: function(){      
        listNotes();
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{ describe:'find a note',
        demandOption:true,
        type:'string',}
    },
    handler:function(argv){
       readNote(argv.title);
    }
})

yargs.parse();