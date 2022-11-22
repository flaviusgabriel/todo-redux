import axios from "axios";

import { API_URL } from "../../views/constants/constants";
import userDetails from "../reducers/userDetails";

export const getUserProfileImage = () => {
  const userId = JSON.parse(localStorage.getItem(userDetails));
  console.log(userId);
  return axios.get(`${API_URL}/user/${userId}/avatar`);
};

// export const addUserProfileImage = (image) => {
//   const bodyFormData = new FormData();
//   bodyFormData.append("image", image);
//   return axios.post(
//     `${API_URL}/user/me/avatar`,

//     {
//       avatar: bodyFormData,
//     },
//     { headers: { "Content-Type": "multipart/form-data" } }
//   );
// };

export const deleteUserProfileImage = () => {
  return axios.delete(`${API_URL}/user/me/avatar`);
};

export const addUserProfileImage = () => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const avatar = JSON.parse(localStorage.getItem("avatar"));
  const formData = new FormData();
  formData.append("avatar", avatar);
  return axios
    .post(`${API_URL}/user/me/avatar`, formData, config)
    .then((res) => {
      console.log(res.formData + "this is data after api call");
    })
    .catch((err) => console.log(err));
};

// export const sendUserProfileImage = (profileImage) => {
//   const config = {
//     headers: {
//       "content-type": "multipart/form-data",
//     },
//   };

//   const avatar = JSON.parse(localStorage.getItem("avatar"));

//   const formData = new FormData();

//   formData.append("avatar", avatar);

//   formData.append("avatar");
// };
