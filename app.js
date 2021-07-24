const yargs = require('yargs');
const {getNotes,addNotes,removedNotes,listNotes,readNote} = require('./notes');
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
        
        addNotes(argv.title,argv.body);
    }
})

yargs.command({//some err
    command:"delete",
    describe:"delete note",
    builder:{
        title:"note title",
        demandOption:true,
        type:"string"
    },  
    handler: function(argv){
        console.log("here",argv)
        //removedNotes(argv.title);
    }
})

yargs.command({//done
    command:"list",
    describe:"list notes",

    handler: function(){
        
        listNotes();
    }
})
yargs.command({//some err
    command:"read",
    describe:"read a note",
    builder:{
        title:"note title",
        demandOption:true,
        type:"string"
    },  
    handler: function(argv){
        //console.log("here:",argv.title);
        readNote(argv.title);
    }
})


console.log(yargs.argv);
