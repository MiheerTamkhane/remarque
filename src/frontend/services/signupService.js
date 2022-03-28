import axios from "axios";

const signupHandler = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export { signupHandler };
