import { useState } from "react";
import {
  Sidebar,
  CreateNote,
  Note,
  MasonryLayout,
} from "../../components/componentsExport";
import "./NotesPage.css";
import { useNote } from "../../contexts/contextExport";
const NotesPage = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { noteList } = useNote();
  return (
    <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
      <Sidebar isSidebar={isSidebar} onSetSidebar={setIsSidebar} />
      <div className="notes-container">
        <CreateNote />
        <div className="notes-render-div">
          <MasonryLayout>
            {noteList.map((note, i) => {
              return <Note key={i} note={note} />;
            })}
          </MasonryLayout>
        </div>
      </div>
    </div>
  );
};

export { NotesPage };
