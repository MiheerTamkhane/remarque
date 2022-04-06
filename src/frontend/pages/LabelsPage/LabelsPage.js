import { useReducer } from "react";
import {
  Note,
  MasonryLayout,
  Sidebar,
} from "../../components/componentsExport";

import { useNote, useTheme } from "../../contexts/contextExport";
import "./LabelsPage.css";
const LabelsPage = () => {
  const { noteList } = useNote();
  const { isSidebar } = useTheme();
  const newLabels = noteList.reduce((acc, curr) => {
    return [...acc, ...curr.tags];
  }, []);
  const uniqueTags = [...new Set(newLabels)];
  const [uniqueState, dispatch] = useReducer(reduceTags, []);
  const reduceTags = (state, action) => {
    console.log(state, action);
  };
  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="notes-container">
          <div className="notes-render-div">
            <h3>All Labels</h3>
            {uniqueTags.length > 0 && (
              <>
                <h4>Filter By Tags</h4>
                <ul className="filter-tags-container">
                  <li className="tag-btn">
                    <label htmlFor="all">
                      <input type="checkbox" id="all" />
                      All
                    </label>
                  </li>
                  {uniqueTags.map((tag, i) => (
                    <li key={i} className="tag-btn">
                      <label htmlFor={tag}>
                        <input type="checkbox" id={tag} />
                        {tag}
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <MasonryLayout>
              {noteList.map((note, i) => {
                return note.tags.length > 0 && <Note key={i} note={note} />;
              })}
            </MasonryLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export { LabelsPage };
