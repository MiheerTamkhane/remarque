import axios from "axios";
const updateNoteService = async (id, note, authToken) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${id}`,
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

export { updateNoteService };
