import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../../views/constants/constants";

const getUserDetails = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

export default getUserDetails;
