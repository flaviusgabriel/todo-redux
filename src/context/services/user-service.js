import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../../views/constants/constants";

axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
  localStorage.getItem("token_id")
)}`;

const updateUserDetails = (object) => {
  return axios.put(`${API_URL}/user/me`, {
    ...object, // This is the body part
  }); // seteaza header cu authHeader => setez autch cu bearer token
};

export const reGetUserDetails = () => {
  return axios.get(`${API_URL}/user/me`);
};

export default updateUserDetails;
