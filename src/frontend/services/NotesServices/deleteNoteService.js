import axios from "axios";

const deleteNoteService = async (id, authToken) => {
  try {
    const { data } = await axios.delete(
      `/api/notes/${id}`,

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

export { deleteNoteService };
