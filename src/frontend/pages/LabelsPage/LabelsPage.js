import { useState } from "react";
import {
  Note,
  MasonryLayout,
  Sidebar,
} from "../../components/componentsExport";

import { useNote, useTheme } from "../../contexts/contextExport";

const LabelsPage = () => {
  const { noteList } = useNote();
  const { isSidebar } = useTheme();

  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="notes-container">
          <div className="notes-render-div">
            <h3>All Labels</h3>
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
