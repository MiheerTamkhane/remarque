import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  const { noteTitle, noteDesc, notePinned, noteColor, tags } = note;

  return (
    <div className={`note ${noteColor}`}>
      <h3> {noteTitle}</h3>

      <div
        className="note-card"
        dangerouslySetInnerHTML={{ __html: noteDesc }}
      />
      {tags.length > 0 && (
        <div className="label-render-div">
          {tags.map((tag, i) => {
            return (
              <div key={i} className="label">
                <span className="label-content">{tag}</span>
                <span className="material-icons label-delete">close</span>
              </div>
            );
          })}
        </div>
      )}
      <div className="toolbar-tools">
        <span
          className={
            notePinned
              ? "material-icons pin-note"
              : "material-icons-outlined pin-note"
          }
        >
          push_pin
        </span>

        <span className="material-icons edit-note">edit</span>
        <span className="material-icons-outlined archive-note">archive</span>

        <span className="material-icons-outlined delete-note">
          delete_outline
        </span>
      </div>
    </div>
  );
};

export { Note };
