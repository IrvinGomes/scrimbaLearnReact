import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./App.css";
import Split from "react-split";
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, notesCollection } from "./firebase/firebase";

function App() {
  const [notes, setNotes] = useState<any>([]);
  const [currentNoteId, setCurrentNoteId] = useState("");
  const [tempNoteText, setTempNoteText] = useState("");
  const sortedNotes = notes.sort((a: any, b: any) => b.updatedAt - a.updatedAt);

  const createNewNote: any = async () => {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newNotRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNotRef.id);
  };

  const deleteNote: any = async (noteId: string) => {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  };

  const updateNote: any = async (text: any) => {
    const docRef = doc(db, "notes", currentNoteId);
    await setDoc(
      docRef,
      { body: text, updatedAt: Date.now() },
      { merge: true }
    );
  };

  const currentNote =
    notes.find((note: any) => note.id === currentNoteId) || notes[0];

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArr);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!currentNote) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);

  useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote.body);
    }
  }, [currentNote]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [tempNoteText]);

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor
            tempNoteText={tempNoteText}
            setTempNoteText={setTempNoteText}
          />
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
