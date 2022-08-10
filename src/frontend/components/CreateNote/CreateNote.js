import { useState } from "react";
import { Label, Pallete, ReactQuillEditor } from "../componentsExport";
import { useNote, useAuth } from "../../contexts/contextExport";
import { addNoteService } from "../../services/servicesExport";
import "./CreateNote.css";
const CreateNote = () => {
  const { auth } = useAuth();
  const [isLabel, setIsLabel] = useState(false);
  const [isPallete, setIsPallete] = useState(false);
  const { noteState, dispatchNote, setNoteList } = useNote();
  const { notePinned, noteColor, tags, noteTitle } = noteState;
  const [tempNote, setTempNote] = useState(noteState);
  const addNoteHandler = async (authToken) => {
    const notes = await addNoteService(authToken, {
      ...noteState,
      noteDesc: tempNote.noteDesc,
      createdAt: new Date(),
    });
    setNoteList(notes);
    dispatchNote({ type: "CLEAR_FIELDS" });
    setTempNote("");
  };

  return (
    <div className="create-note-container">
      <section className={`note-section ${noteColor}`}>
        <ReactQuillEditor value={tempNote.noteDesc} setValue={setTempNote} />
        <input
          type="text"
          placeholder="Title"
          className="note-title"
          value={noteTitle}
          onChange={(e) => {
            dispatchNote({ type: "NOTE_TITLE", payload: e.target.value });
          }}
        />
        {tags.length > 0 && (
          <div className="label-render-div">
            {tags.map((tag, i) => {
              return (
                <div key={i} className="label">
                  <span className="label-content">{tag}</span>
                  <span
                    className="material-icons label-delete"
                    onClick={() =>
                      dispatchNote({ type: "RMV_TAG", payload: tag })
                    }
                  >
                    close
                  </span>
                </div>
              );
            })}
          </div>
        )}
        <div className="bottom-toolbar">
          <div className="toolbar-tools">
            <span
              className={
                notePinned
                  ? "material-icons pin-note"
                  : "material-icons-outlined pin-note"
              }
              onClick={() => {
                dispatchNote({ type: "IS_PINNED" });
              }}
            >
              push_pin
            </span>
            <Label
              setIsLabel={setIsLabel}
              dispatchNote={dispatchNote}
              isLabel={isLabel}
              setIsPallete={setIsPallete}
            />
            <Pallete
              setIsPallete={setIsPallete}
              dispatchNote={dispatchNote}
              isPallete={isPallete}
              setIsLabel={setIsLabel}
            />
          </div>
          <button
            className="ct-btn add-note"
            onClick={() => {
              addNoteHandler(auth.authToken);
            }}
          >
            Add
          </button>
        </div>
      </section>
    </div>
  );
};

export { CreateNote };
