import { useState, useEffect } from "react";
import { addUserProfileImage } from "../../../../../context/services/user-profile-image";
import store from "../../../../../store";
import { useDispatch } from "react-redux";

const EditProfileImageModal = () => {
  const [image, setImage] = useState(store.getState().userProfileImage);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Niger");
    if (image !== "") {
      addUserProfileImage(image).then(() => {
        localStorage.setItem("avatar", JSON.stringify(image));
        dispatch(addUserProfileImage(image));
      });
    }
  }, [image]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit image
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="file"
                // onChange={(e) =>
                //   setImage(URL.createObjectURL(e.target.files[0]))

                // }
                onChange={onImageChange}
              />
            </div>
            <div>
              <label className="form-label">Large file input example</label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImageModal;
