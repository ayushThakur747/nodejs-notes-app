const yargs = require('yargs');
const {addNote,removeNote,listNotes,readNote} = require('./notes');
//customizing yargs version
yargs.version('1.1.0');
//create add command

yargs.command({//done
    command: 'add',
    describe: 'Add a new note',
    builder:{//what to do as this command fires
        title:{//1st args
            describe:"Note title",
            demandOption: true,
            type: 'string'
        },
        body:{//2nd args
            describe: "Note body",
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv){//what to do after builder
        
        addNote(argv.title,argv.body);
    }
})

yargs.command({//done
    command:"remove",
    describe:"remove a note",
    builder:{
        title:{//its a obj remember
            describe:"Note title to Delete",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        removeNote(argv.title);
    }
})

yargs.command({//done
    command:"list",
    describe:"list notes",
    handler: function(){      
        listNotes();
    }
})
yargs.command({//done
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

