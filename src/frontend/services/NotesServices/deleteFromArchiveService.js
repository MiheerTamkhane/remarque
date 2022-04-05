import axios from "axios";

const deleteFromArchiveService = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.archives;
  } catch (e) {
    console.error(e);
  }
};

export { deleteFromArchiveService };
