import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/NoteReducer";
import {
  updateNoteService,
  deleteNoteService,
  addNoteToArchiveService,
  deleteFromArchiveService,
  restoreFromArchiveService,
} from "../services/servicesExport";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const initialNote = {
    noteTitle: "",
    noteDesc: "",
    notePinned: false,
    noteColor: "default",
    tags: [],
    noteInTrash: false,
  };
  const [noteState, dispatchNote] = useReducer(noteReducer, initialNote);
  const [noteList, setNoteList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);

  // Update note Handler function 🔼
  const updateNoteHandler = async (id, note, authToken) => {
    const response = await updateNoteService(id, note, authToken);
    setNoteList(response);
  };

  // Delete note Handler function 🔻
  const deleteNoteHandler = async (id, authToken) => {
    const response = await deleteNoteService(id, authToken);
    setNoteList(response);
  };

  // Adding note to Archives function
  const addNoteToArchiveHandler = async (id, note, authToken) => {
    const response = await addNoteToArchiveService(id, note, authToken);
    setArchiveList(response.archives);
    setNoteList(response.notes);
  };

  // Restoring notes from archives function
  const restoreFromArchiveHandler = async (id, authToken) => {
    const response = await restoreFromArchiveService(id, authToken);
    setArchiveList(response.archives);
    setNoteList(response.notes);
  };

  // delete direct from archive handler function
  const deleteFromArchiveHandler = async (id, authToken) => {
    const response = await deleteFromArchiveService(id, authToken);
    setArchiveList(response);
  };

  const [q, setQ] = useState("");
  const [searchParams] = useState(["noteTitle", "noteDesc"]);

  function search(items) {
    return items.filter((item) => {
      return searchParams.some((newItem) => {
        return item[newItem].toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    });
  }
  return (
    <NoteContext.Provider
      value={{
        q,
        setQ,
        noteState,
        dispatchNote,
        noteList,
        setNoteList,
        updateNoteHandler,
        deleteNoteHandler,
        addNoteToArchiveHandler,
        archiveList,
        deleteFromArchiveHandler,
        restoreFromArchiveHandler,
        search,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => {
  const context = useContext(NoteContext);

  if (context === undefined) throw new Error("Error: from note context");

  return context;
};

export { useNote, NoteProvider };
