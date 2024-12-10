import React, { useState, useEffect } from "react";

const NotePad = () => {
  const [notes, setNotes] = useState(() => {
    // Retrieve notes from localStorage on initial render
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    // Update localStorage whenever notes change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    setNotes([...notes, ""]);
  };

  const updateNote = (index, newText) => {
    const newNotes = [...notes];
    newNotes[index] = newText;
    setNotes(newNotes);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>
        <img src="./card-text.svg" alt="Notes Icon" /> Notes
      </h1>
      <button className="btn" onClick={createNote}>
        Create Note
      </button>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note-wrapper">
            <p
              contentEditable="true"
              className="input-box"
              onInput={(e) => updateNote(index, e.currentTarget.textContent)}
            >
              {note}
              <img
             style={{color:"White"}}
                alt="Delete "
                onClick={() => deleteNote(index)}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotePad;
