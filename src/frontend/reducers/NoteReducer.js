const noteReducer = (state, action) => {
  switch (action.type) {
    case "NOTE_TITLE":
      return { ...state, noteTitle: action.payload };
    case "NOTE_DESC":
      return { ...state, noteDesc: action.payload };
    case "IS_PINNED":
      return { ...state, notePinned: !state.notePinned };
    case "NOTE_COLOR":
      return { ...state, noteColor: action.payload };
    case "ADD_TAG":
      if (action.payload === "" || state.tags.includes(action.payload)) {
        alert("tag is already there or Field is empty!");
        return { ...state, tags: state.tags };
      } else {
        return { ...state, tags: [...state.tags, action.payload] };
      }
    case "RMV_TAG":
      return {
        ...state,
        tags: [...state.tags.filter((item) => item !== action.payload)],
      };
    case "CLEAR_FIELDS":
      return {
        ...state,
        noteTitle: "",
        noteDesc: "",
        notePinned: false,
        noteColor: "#efefef",
        tags: [],
      };
    default:
      return state;
  }
};

export { noteReducer };
