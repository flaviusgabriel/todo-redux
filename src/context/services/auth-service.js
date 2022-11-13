import axios from "axios";

const API_URL = "https://api-nodejs-todolist.herokuapp.com/user/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      //   if (response.data.accessToken) {
      //     localStorage.setItem("user", JSON.stringify(response.data));
      //   }
      console.log(response);

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
