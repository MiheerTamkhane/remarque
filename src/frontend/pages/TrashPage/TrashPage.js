import React from "react";
import "./TrashPage.css";
import { useTheme, useNote, useAuth } from "../../contexts/contextExport";
import { MasonryLayout, Sidebar } from "../../components/componentsExport";
const TrashPage = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const { isSidebar } = useTheme();
  const { noteList, deleteNoteHandler, updateNoteHandler } = useNote();
  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="trash-page">
          <h3>Trash Page</h3>
          <MasonryLayout>
            {noteList.length === 0 ? (
              <h3>Empty Trash</h3>
            ) : (
              noteList.map((note, i) => {
                const { noteColor, noteDesc, tags, noteTitle, _id } = note;
                return (
                  note.noteInTrash && (
                    <div key={i} className={`note ${noteColor}`}>
                      <h3> {noteTitle}</h3>

                      <div
                        className="note-card-desc"
                        dangerouslySetInnerHTML={{ __html: noteDesc }}
                      />
                      {tags.length > 0 && (
                        <div className="label-render-div">
                          {tags.map((tag, i) => {
                            return (
                              <div key={i} className="label">
                                <span className="label-content">{tag}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <div className="toolbar-tools">
                        <span
                          className="material-icons archive-note"
                          onClick={() =>
                            updateNoteHandler(
                              _id,
                              { ...note, noteInTrash: false },
                              authToken
                            )
                          }
                        >
                          restore_from_trash
                        </span>

                        <span
                          className="material-icons-outlined delete-note"
                          onClick={() => deleteNoteHandler(_id, authToken)}
                        >
                          delete_outline
                        </span>
                      </div>
                    </div>
                  )
                );
              })
            )}
          </MasonryLayout>
        </div>
      </div>
    </>
  );
};

export { TrashPage };
