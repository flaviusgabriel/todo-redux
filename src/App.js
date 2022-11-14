import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Login from "./views/components/pages/loginPage/LoginPage";
import RegisterPage from "./views/components/pages/registerPage/RegisterPage";
import ToDoPAge from "./views/components/pages/toDoPage/ToDoPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<ToDoPAge />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
