import { useSelector, ReactReduxContext } from "react-redux";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Modal from "../../modal/Modal";

const ProfilePage = () => {
  const { store } = useContext(ReactReduxContext);

  const getUserDetails = store.getState().userDetails;

  return (
    <div>
      <h1>Profile Page</h1>
      <h5>Name: {getUserDetails.name}</h5>
      <h5>Email: {getUserDetails.email}</h5>
      <h5>Age: {getUserDetails.age}</h5>

      <Modal />
    </div>
  );
};

export default ProfilePage;
