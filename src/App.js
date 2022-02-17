import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div>
        {user ? <Logout /> : <Login />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
