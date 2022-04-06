import { useTheme, useNote, useAuth } from "../../contexts/contextExport";
import { MasonryLayout, Sidebar } from "../../components/componentsExport";
import "./ArchivePage.css";
const ArchivePage = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const { isSidebar } = useTheme();
  const { archiveList, deleteFromArchiveHandler, restoreFromArchiveHandler } =
    useNote();

  return (
    <>
      <Sidebar />
      <div className={isSidebar ? "notes-page margin-left-20" : "notes-page"}>
        <div className="trash-page">
          <h3>Archived Notes</h3>
          <MasonryLayout>
            {archiveList.length < 1 ? (
              <h3>No Archive Notes</h3>
            ) : (
              archiveList.map((note, i) => {
                const { noteColor, noteDesc, tags, noteTitle, _id } = note;
                return (
                  !note.noteInTrash && (
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
                            restoreFromArchiveHandler(_id, authToken)
                          }
                        >
                          unarchive
                        </span>

                        <span
                          className="material-icons-outlined delete-note"
                          onClick={() =>
                            deleteFromArchiveHandler(_id, authToken)
                          }
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

export { ArchivePage };
