import axios from "axios";

const addNoteService = async (authToken, note) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.notes;
  } catch (e) {
    console.error(e);
  }
};

export { addNoteService };
