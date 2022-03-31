import { useState } from "react";
import { Sidebar, CreateNote } from "../../components/componentsExport";
import "./NotesPage.css";
const NotesPage = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
      <Sidebar isSidebar={isSidebar} onSetSidebar={setIsSidebar} />
      <div className="notes-container">
        <CreateNote />
        <h1>All notes will render here...</h1>
      </div>
    </div>
  );
};

export { NotesPage };
