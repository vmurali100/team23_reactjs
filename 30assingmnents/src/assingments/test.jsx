import React, { useState, useEffect } from "react";



const Notepad1 = () => {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      const savedNotes = localStorage.getItem("notes");
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
  
    const addNote = () => {
      setNotes(["", ...notes]);
    };
  
    const updateNote = (index, content) => {
      const updatedNotes = [...notes];
      updatedNotes[index] = content;
      setNotes(updatedNotes);
    };
  
    const deleteNote = (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };
  
    return (
      <div className="container">
        <h1>
          <img  alt="Notes Icon" />
          Notes
        </h1>
        <button className="btn" onClick={addNote}>
          <img  alt="Create Note" />
          Create Note
        </button>
        <div className="notes-container">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <p
                contentEditable="true"
                className="input-box"
                onInput={(e) => updateNote( e.currentTarget.textContent,index)}
              >
                {note}
              </p>
              <img
              
                alt="Delete Note"
                onClick={() => deleteNote(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Notepad1;