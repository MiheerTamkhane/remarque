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
    console.log("update");
    return data.notes;
  } catch (e) {
    console.log(e);
  }
};

export { updateNoteService };
