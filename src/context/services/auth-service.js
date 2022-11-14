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

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token_id");
};

export default {
  login,
  logout,
};
