import React, { useState, useEffect, useRef } from 'react';
import delete_icon from "../images/delete.png";

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const noteRefs = useRef([]);

    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = () => {
        setNotes([...notes, ""]);
        noteRefs.current.push(React.createRef());
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        noteRefs.current.splice(index, 1); // Remove the corresponding ref
    };

    const handleNoteChange = (index, newContent) => {
        const updatedNotes = notes.map((note, i) =>
            i === index ? newContent : note
        );
        setNotes(updatedNotes);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.contentEditable === "true") {
            document.execCommand("insertLineBreak");
            e.preventDefault();
        }
    };

    const handleBlur = (index) => {
        handleNoteChange(index, noteRefs.current[index].current.textContent);
    };

    return (
        <div className="container">
            <h1>Note</h1>
            <button className="btn" onClick={handleAddNote}>
                Create Note
            </button>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div
                        key={index}
                        className="input-box"
                        contentEditable
                        ref={noteRefs.current[index] = noteRefs.current[index] || React.createRef()}
                        suppressContentEditableWarning
                        onKeyDown={handleKeyDown}
                        onBlur={() => handleBlur(index)}
                    >
                        {note}
                        <img
                            src={delete_icon}
                            alt="Delete"
                            onClick={() => handleDeleteNote(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoteApp;
