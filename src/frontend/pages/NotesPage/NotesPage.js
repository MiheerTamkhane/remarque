import {
  CreateNote,
  Note,
  MasonryLayout,
  Sidebar,
} from "../../components/componentsExport";
import "./NotesPage.css";
import { useNote, useTheme } from "../../contexts/contextExport";

const NotesPage = () => {
  const { noteList, search } = useNote();
  const { isSidebar } = useTheme();

  const pinnedNotes = search(noteList).filter(
    (item) => item.notePinned && !item.noteInTrash
  );
  const otherNotes = search(noteList).filter(
    (item) => !item.notePinned && !item.noteInTrash
  );

  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="notes-container">
          <CreateNote />
          {noteList.length > 0 && (
            <div className="notes-render-div">
              {pinnedNotes.length > 0 && <h3>Pinned Notes</h3>}
              <MasonryLayout>
                {search(noteList).map((note, i) => {
                  return (
                    note.notePinned &&
                    !note.noteInTrash && <Note key={i} note={note} />
                  );
                })}
              </MasonryLayout>
            </div>
          )}

          {noteList.length > 0 && (
            <div className="notes-render-div">
              {otherNotes.length > 0 && <h3>Other Notes</h3>}
              <MasonryLayout>
                {search(noteList).map((note, i) => {
                  return (
                    !note.notePinned &&
                    !note.noteInTrash && <Note key={i} note={note} />
                  );
                })}
              </MasonryLayout>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { NotesPage };
