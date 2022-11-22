import { useState } from "react";
import { ReactReduxContext } from "react-redux";
import { useContext } from "react";
import { useDispatch } from "react-redux";

import updateUserDetails from "../../../../../context/services/user-service";
import { updateUserDetails as actionUpdateUserDetails } from "../../../../../context/actions/userDetailsAction";
import { reGetUserDetails } from "../../../../../context/services/user-service";

const EditProfileModal = () => {
  const dispatch = useDispatch();

  const { store } = useContext(ReactReduxContext);
  const getUserDetails = store.getState().userDetails;

  const [name, setName] = useState(getUserDetails.name);
  const [email, setEmail] = useState(getUserDetails.email);
  const [age, setAge] = useState(getUserDetails.age);

  const [close, setClose] = useState(false);

  const upddateUserProfile = () => {
    updateUserDetails({ age: Number(age), name, email })
      .then((response) => {
        reGetUserDetails().then((response) => {
          console.log(response);
          setClose(true);
        });
        console.log(response);
        dispatch(actionUpdateUserDetails({ email, name, age }));

        //get
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit Profile
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-primary"
                  data-bs-dismiss={close && "modal"}
                  onClick={(e) => {
                    e.preventDefault();
                    upddateUserProfile();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
