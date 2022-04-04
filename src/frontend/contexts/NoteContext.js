import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/NoteReducer";
import { updateNoteService } from "../services/NotesServices/updateNoteService";
const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const initialNote = {
    noteTitle: "",
    noteDesc: "",
    notePinned: false,
    noteColor: "default",
    tags: [],
  };
  const [noteState, dispatchNote] = useReducer(noteReducer, initialNote);
  const [noteList, setNoteList] = useState([]);

  const updateNoteHandler = async (id, note, authToken) => {
    const response = await updateNoteService(id, note, authToken);
    setNoteList(response);
    console.log(note);
    console.log("handler run");
  };
  return (
    <NoteContext.Provider
      value={{
        noteState,
        dispatchNote,
        noteList,
        setNoteList,
        updateNoteHandler,
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
