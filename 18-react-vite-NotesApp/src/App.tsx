import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "../public/data.js";
import "./App.css";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const getNotesFromLocalStorage: any = () => {
    const storageNotes = localStorage.getItem("notes");
    return storageNotes && JSON.parse(storageNotes);
  };

  const saveNotesOnLocalStorage: any = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
  };

  const [notes, setNotes] = useState<any>(getNotesFromLocalStorage() || []);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(()=>{
    saveNotesOnLocalStorage()
  },[notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes: any) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text: any) {
    setNotes((oldNotes: any) =>
      oldNotes.map((oldNote: any) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note: any) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
