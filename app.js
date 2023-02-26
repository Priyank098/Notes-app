const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

// const command = process.argv[2] 
// create add command 
yargs.command({
    command:"add",
    describe:"Add a New Note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        },
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})
// create remove command 
yargs.command({
    command:"remove",
    describe:"remove a Note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
// create list command 
yargs.command({
    command:"list",
    describe:"list a Note",
    handler: function(){
        notes.listNotes()
    }
})
// create read command 
yargs.command({
    command:"read",
    describe:"read a Note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
}) 
// console.log(process.argv);
// console.log(yargs.argv); 
yargs.parse()