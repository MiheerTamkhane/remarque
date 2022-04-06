import { useState } from "react";
import "./Modal.css";
import { Label, Pallete, ReactQuillEditor } from "../componentsExport";
import { useAuth, useNote } from "../../contexts/contextExport";
const Modal = ({
  currentNote,
  setIsModal,
  isModal,
  updatedNote,
  setUpdatedNote,
}) => {
  const { updateNoteHandler } = useNote();
  const {
    auth: { authToken },
  } = useAuth();
  const [isLabel, setIsLabel] = useState(false);
  const [isPallete, setIsPallete] = useState(false);
  const { _id } = currentNote;
  return (
    <div className="update-note-container">
      <section className={`modal-section ${updatedNote.noteColor}`}>
        <ReactQuillEditor
          value={updatedNote.noteDesc}
          setValue={setUpdatedNote}
        />
        <input
          type="text"
          placeholder="Title"
          className="modal-title"
          value={updatedNote.noteTitle}
          onChange={(e) => {
            setUpdatedNote({ ...updatedNote, noteTitle: e.target.value });
          }}
        />
        {updatedNote.tags.length > 0 && (
          <div className="label-render-div">
            {updatedNote.tags.map((tag, i) => {
              return (
                <div key={i} className="label">
                  <span className="label-content">{tag}</span>
                  <span
                    className="material-icons label-delete"
                    onClick={() =>
                      setUpdatedNote({
                        ...updatedNote,
                        tags: [
                          ...updatedNote.tags.filter((item) => item !== tag),
                        ],
                      })
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
                updatedNote.notePinned
                  ? "material-icons pin-note"
                  : "material-icons-outlined pin-note"
              }
              onClick={() => {
                setUpdatedNote({
                  ...updatedNote,
                  notePinned: !updatedNote.notePinned,
                });
              }}
            >
              push_pin
            </span>
            <Label
              isModal={isModal}
              setUpdatedNote={setUpdatedNote}
              isLabel={isLabel}
              setIsLabel={setIsLabel}
              setIsPallete={setIsPallete}
            />
            <Pallete
              isModal={isModal}
              setUpdatedNote={setUpdatedNote}
              isPallete={isPallete}
              setIsPallete={setIsPallete}
              setIsLabel={setIsLabel}
            />
          </div>
          <button
            className="ct-btn add-note"
            onClick={() => {
              updateNoteHandler(
                _id,
                { ...updatedNote, createdAt: new Date() },
                authToken
              );
              setIsModal(false);
            }}
          >
            Update
          </button>
          <button
            className="ct-btn add-note"
            onClick={() => {
              setIsModal(false);
            }}
          >
            Exit
          </button>
        </div>
      </section>
    </div>
  );
};

export { Modal };
