const Sidebar: React.FC<any> = ({
  notes,
  currentNote,
  newNote,
  setCurrentNoteId,
}) => {
  const noteElements = notes.map((note: any, index: any) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};
export default Sidebar;
