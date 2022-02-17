import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
      <Link to="/profile">Profile de {user.name}</Link>
      <Link to="/Home">Fil d'actualité de {user.name}</Link>
    </div>
  );
};

export default Logout;
