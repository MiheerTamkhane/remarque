import axios from "axios";

const getNotesService = async (authToken) => {
  try {
    const { data } = await axios.get("/api/notes", {
      headers: {
        authorization: authToken,
      },
    });
    return data.notes;
  } catch (e) {
    console.error(e);
  }
};

export { getNotesService };
