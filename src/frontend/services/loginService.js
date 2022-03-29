import axios from "axios";
const loginHandler = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
export { loginHandler };
