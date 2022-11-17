import { useSelector, ReactReduxContext } from "react-redux";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Modal from "../../modal/Modal";

import "./profilePage.scss";

const ProfilePage = () => {
  const { store } = useContext(ReactReduxContext);

  const getUserDetails = store.getState().userDetails;

  console.log(getUserDetails);

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
          <div className="col-md-4 d-flex align-items-center">
            <h1>My Profile</h1>
          </div>

          <div className="ol-md-4 justify-content-end  d-flex">
            <Modal />
          </div>
        </div>

        <div className="row align-items-md-stretch user-profile-details-container rounded-3">
          {/* <div className="col-md-6">
            <div className="h-100 p-5 ">
              <span className="profile-image-container"></span>
              <div className="middle">
                <div className="text">John Doe</div>
              </div>
            </div>
          </div> */}

          <div className="col-md-6">
            <div className="profilepic">
              <img
                className="profilepic__image"
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                width="150"
                height="150"
                alt="Profibild"
              />
              <div className="profilepic__content">
                <span className="profilepic__icon">
                  <ion-icon name="create-outline"></ion-icon>
                </span>
                <span className="profilepic__text">Edit Profile</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="h-100 p-5 ">
              <ul className="user-list-details list-unstyled mt-3 mb-4 display-6">
                <li className="mb-1">Name: {getUserDetails.name}</li>
                <li className="mb-1">Email: {getUserDetails.email}</li>
                <li className="mb-1">Age: {getUserDetails.age}</li>
                <li className="mb-1">
                  Created At:
                  {new Date(getUserDetails.createdAt).toLocaleDateString(
                    "en-US"
                  )}
                </li>
                <li className="mb-1">
                  Updated At:{" "}
                  {new Date(getUserDetails.updatedAt).toLocaleDateString(
                    "en-US"
                  )}
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
