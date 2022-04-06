import {
  CreateNote,
  Note,
  MasonryLayout,
  Sidebar,
} from "../../components/componentsExport";
import "./NotesPage.css";
import { useNote, useTheme } from "../../contexts/contextExport";

const NotesPage = () => {
  const { noteList } = useNote();
  const { isSidebar } = useTheme();
  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="notes-container">
          <CreateNote />
          <div className="notes-render-div">
            <h3>Pinned Notes</h3>
            <MasonryLayout>
              {noteList.map((note, i) => {
                return (
                  note.notePinned &&
                  !note.noteInTrash && <Note key={i} note={note} />
                );
              })}
            </MasonryLayout>
          </div>
          <div className="notes-render-div">
            <h3>Other Notes</h3>
            <MasonryLayout>
              {noteList.map((note, i) => {
                return (
                  !note.notePinned &&
                  !note.noteInTrash && <Note key={i} note={note} />
                );
              })}
            </MasonryLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export { NotesPage };
