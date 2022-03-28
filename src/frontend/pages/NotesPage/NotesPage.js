import { Sidebar } from "../../components/componentsExport";
import "./NotesPage.css";
const NotesPage = () => {
  return (
    <div className="notes-page">
      <Sidebar />
      <div className="notes-container">
        <h1>All notes will render here...</h1>
      </div>
    </div>
  );
};

export { NotesPage };
