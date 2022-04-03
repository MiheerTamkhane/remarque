import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateNote.css";
import { Label, Pallete } from "../componentsExport";
import { useNote, useAuth } from "../../contexts/contextExport";
import { addNoteService } from "../../services/servicesExport";
const CreateNote = () => {
  const [isLabel, setIsLabel] = useState(false);
  const [isPallete, setIsPallete] = useState(false);
  const [note, setNote] = useState("");
  const { auth } = useAuth();
  const { noteState, dispatchNote, setNoteList } = useNote();
  const { notePinned, noteColor, tags, noteTitle } = noteState;
  const addNoteHandler = async (authToken) => {
    const notes = await addNoteService(authToken, {
      ...noteState,
      noteDesc: note,
    });
    setNoteList(notes);
    dispatchNote({ type: "CLEAR_FIELDS" });
    setNote("");
  };
  return (
    <div className="create-note-container">
      <section className={`note-section ${noteColor}`}>
        <ReactQuill
          value={note}
          onChange={setNote}
          className="react-quill"
          modules={modules}
          formats={formats}
          placeholder="Take a Note..."
          theme="snow"
        />
        <input
          type="text"
          placeholder="Title"
          className={`note-title ${noteColor}`}
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
              dispatchNote={dispatchNote}
              isLabel={isLabel}
              setIsLabel={setIsLabel}
              setIsPallete={setIsPallete}
            />
            <Pallete
              dispatchNote={dispatchNote}
              isPallete={isPallete}
              setIsPallete={setIsPallete}
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

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code",
];

export { CreateNote };
