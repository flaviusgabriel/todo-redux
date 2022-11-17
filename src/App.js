import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  json,
} from "react-router-dom";

import "./App.scss";
import Login from "./views/components/pages/loginPage/LoginPage";
import RegisterPage from "./views/components/pages/registerPage/RegisterPage";
import ToDoPAge from "./views/components/pages/toDoPage/ToDoPage";
import { useSelector } from "react-redux";
import AlertMessage from "./views/components/form/AlertMessage";
import { type } from "../src/views/components/form/alert.types";
import NotFoundPage from "./views/components/pages/notFoundPage/NotFoundPage";
import NavigationMenu from "./views/components/form/NavigationMenu";
import ProfilePage from "./views/components/pages/profilePage/ProfilePage";

function App() {
  const { message, type } = useSelector((state) => state.message);

  const tokenID = JSON.parse(localStorage.getItem("token_id"));

  return (
    <>
      {tokenID !== null && <NavigationMenu />}
      {message !== undefined && <AlertMessage message={message} type={type} />}

      <Routes>
        <Route path="/" element={tokenID !== null ? <ToDoPAge /> : <Login />} />
        <Route
          path="/profile"
          element={tokenID !== null ? <ProfilePage /> : <Login />}
        />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
