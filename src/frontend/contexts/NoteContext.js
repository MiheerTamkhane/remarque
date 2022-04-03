import { createContext, useContext, useReducer, useState } from "react";
import { noteReducer } from "../reducers/NoteReducer";
const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const initialNote = {
    noteTitle: "",
    noteDesc: "",
    notePinned: false,
    noteColor: "",
    tags: [],
  };
  const [noteState, dispatchNote] = useReducer(noteReducer, initialNote);
  const [noteList, setNoteList] = useState([]);

  return (
    <NoteContext.Provider
      value={{ noteState, dispatchNote, noteList, setNoteList }}
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
