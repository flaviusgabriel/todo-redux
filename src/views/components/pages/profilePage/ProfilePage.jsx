import { useSelector, ReactReduxContext } from "react-redux";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Modal from "../../modal/Modal";
import store from "../../../../store";

import "./profilePage.scss";
import { useEffect } from "react";
import getRandomColor from "../../../utils/getRandomColor";
import createImageFromInitials from "../../../utils/createImageFromInitials";
import getInitials from "../../../utils/getInitials";
import { useState } from "react";

import { addUserProfileImage } from "../../../../context/services/user-profile-image";

import { useDispatch } from "react-redux";

import { deleteUserProfileImage } from "../../../../context/services/user-profile-image";
import { removeUserProfileImage } from "../../../../context/actions/userProfileAction";
import userProfileImage from "../../../../context/reducers/userProfileImage";
import EditProfileImageModal from "./editProfileImageModal/EditProfileImageModal";
import EditProfileModal from "./editProfileModal/EditProfileModal";
//import Image from "../../common/image/Image";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [userUpdate, setUserUpdate] = useState(store.getState().userDetails);
  const [image, setImage] = useState(store.getState().userProfileImage);

  useEffect(() => {
    if (image !== "" || Object.keys(userUpdate).length > 0) {
    }

    localStorage.setItem("user_details", JSON.stringify(userUpdate));
    localStorage.setItem("avatar", JSON.stringify(image));
  }, [userUpdate, image]);

  store.subscribe(async () => {
    console.log("%s changed from %s to %s");

    await setUserUpdate(store.getState().userDetails);
    await setImage(store.getState().userProfileImage);
  });

  // profile image
  const profileImageLetters = userUpdate.name.charAt(0).toUpperCase();
  console.log(profileImageLetters);

  const name = userUpdate.name;

  // add image
  // console.log(image);
  // useEffect(() => {
  //   if (image !== "") {
  //     addUserProfileImage(image).then(() => {
  //       localStorage.setItem("avatar", JSON.stringify(image));
  //       dispatch(addUserProfileImage(image));
  //     });
  //   }
  // }, [image]);

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
          <div className="col-md-4 d-flex align-items-center">
            <h1>My Profile</h1>
          </div>

          <div className="ol-md-4 justify-content-end  d-flex">
            <EditProfileModal />
          </div>
        </div>

        <div className="row align-items-md-stretch user-profile-details-container rounded-3">
          <div className="col-md-6">
            <div className="profilepic">
              <div>
                <img
                  id="preview"
                  src={
                    image.length <= 0
                      ? createImageFromInitials(150, name, getRandomColor())
                      : image
                  }
                  alt="profile-pic"
                  style={{ width: 150, height: 150 }}
                />
              </div>
              <div className="profilepic__content d-flex flex-row center-items">
                <span className="profilepic__icon ">
                  <ion-icon name="create-outline"></ion-icon>
                </span>

                {/* <EditProfileImageModal /> */}
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(URL.createObjectURL(e.target.files[0]));
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <span
                  className="profilepic__icon"
                  onClick={() =>
                    deleteUserProfileImage().then(() => {
                      dispatch(removeUserProfileImage(""));
                      localStorage.removeItem("avatar");
                    })
                  }
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </span>
              </div>
            </div>
            <EditProfileImageModal />
          </div>

          <div className="col-md-6 ">
            <div className="h-100 p-5 ">
              <ul className="user-list-details list-unstyled mt-3 mb-4 display-6">
                <li className="mb-1">Name: {userUpdate.name}</li>
                <li className="mb-1">Email: {userUpdate.email}</li>
                <li className="mb-1">Age: {userUpdate.age}</li>
                <li className="mb-1">
                  Created At:
                  {new Date(userUpdate.createdAt).toLocaleDateString("en-US")}
                </li>
                <li className="mb-1">
                  Updated At:{" "}
                  {new Date(userUpdate.updatedAt).toLocaleDateString("en-US")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
