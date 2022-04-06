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

  function reduceTags(state, action) {
    switch (action.type) {
      case "FILTER_BY_TAG":
        return {
          ...state,
          newTags: state.newTags.includes(action.payload)
            ? state.newTags.filter((val) => val !== action.payload)
            : [...state.newTags, action.payload],
        };
      default:
        return state;
    }
  }

  const filterByTags = (newTags, noteList) => {
    if (newTags.length !== 0) {
      return noteList.filter(
        (note) => note.tags.filter((tag) => newTags.includes(tag)).length > 0
      );
    }
    return noteList;
  };

  const [state, dispatch] = useReducer(reduceTags, {
    newTags: [],
  });
  const newList = filterByTags(state.newTags, noteList);

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
                  {uniqueTags.map((tag, i) => (
                    <li key={i} className="tag-btn">
                      <label htmlFor={tag}>
                        <input
                          type="checkbox"
                          id={tag}
                          value={tag}
                          checked={state.newTags.includes(tag)}
                          onChange={() =>
                            dispatch({ type: "FILTER_BY_TAG", payload: tag })
                          }
                        />
                        {tag}
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <MasonryLayout>
              {newList.map((note, i) => {
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
