import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Login from "./views/components/pages/loginPage/LoginPage";
import ToDoPAge from "./views/components/pages/toDoPage/ToDoPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<ToDoPAge />} />
    </Routes>
  );
}

export default App;
