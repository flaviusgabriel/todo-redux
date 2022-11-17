import axios from "axios";
import { API_URL } from "../../views/constants/constants";

const login = (email, password) => {
  return axios
    .post(`${API_URL}/user/login`, {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("token_id", JSON.stringify(response.data.token));

      localStorage.setItem("user_details", JSON.stringify(response.data.user));

      return response;
    });
};

const logout = () => {
  localStorage.removeItem("token_id");
  localStorage.removeItem("user_details");
};

const register = (age, email, name, password) => {
  return axios.post(`${API_URL}/user/register`, {
    name,
    email,
    password,
    age,
  });
};

export default {
  login,
  logout,
  register,
};
