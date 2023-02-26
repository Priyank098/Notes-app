const fs = require("fs");
const chalk = require("chalk")

// const { add } = require("./utils");
const getNotes = () => {
    return "this is my notes";
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    // debugger
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log("New Note Added");
    } else {
        console.log("title Already Taken");
    }

    // console.log(notes);
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    if (duplicateNotes !== 0) {
        notes.pop({
            title: title,
        })
        saveNotes(notes)
        console.log(chalk.green(' Note deleted!'));
        // console.log(" Note deleted");
    } else {
        console.log(chalk.red(' no Note found!'));

    }

    console.log(title);
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes'));
    notes.map((note) => {
        console.log("Your Title:", note.title)
    })

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })
}
const readNote = (title) => {
    const notes = loadNotes()
    const noteFound = notes.filter((note) => {
        if (note.title === title) {
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        }
        else {
            console.log(chalk.red(' no Note found!'));
        }
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}