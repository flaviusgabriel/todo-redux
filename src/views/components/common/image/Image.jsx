import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import store from "../../../../store";

import "./image.scss";
import getRandomColor from "../../../utils/getRandomColor";
import createImageFromInitials from "../../../utils/createImageFromInitials";
import {
  addUserProfileImage,
  deleteUserProfileImage,
  removeUserProfileImage,
} from "../../../../context/actions/userProfileAction";

const Image = () => {
  const dispatch = useDispatch();
  const [userUpdate, setUserUpdate] = useState(store.getState().userDetails);
  const [image, setImage] = useState(store.getState().userProfileImage);

  useEffect(() => {
    if (image !== "") {
    }

    //localStorage.setItem("user_details", JSON.stringify(userUpdate));
    localStorage.setItem("avatar", JSON.stringify(image));
  }, [image]);

  store.subscribe(async () => {
    //console.log("%s changed from %s to %s");

    //await setUserUpdate(store.getState().userDetails);
    await setImage(store.getState().userProfileImage);
  });

  // profile image
  const profileImageLetters = userUpdate.name.charAt(0).toUpperCase();
  console.log(profileImageLetters);

  //const name = userUpdate.name;
  //const imgSrc = "";

  // add image

  // const [image, setImage] = useState("");
  //console.log(image);
  useEffect(() => {
    if (image !== "") {
      addUserProfileImage(image).then(() => {
        localStorage.setItem("avatar", JSON.stringify(image));
        dispatch(addUserProfileImage(image));
      });
    }
  }, [image]);

  return (
    <div>
      <div className="profilepic">
        <div>
          <img
            id="preview"
            src={
              image.length <= 0
                ? createImageFromInitials(150, name, getRandomColor())
                : image
            }
            style={{ width: 150, height: 150 }}
            alt="profile-pic"
          />
        </div>
        <div className="profilepic__content d-flex flex-row center-items">
          {/* <span className="profilepic__icon">
                  <ion-icon name="create-outline"></ion-icon>
                </span> */}
          <input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
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
    </div>
  );
};

export default Image;
