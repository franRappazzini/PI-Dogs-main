import "./Header.css";

import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header>
      <NavLink
        to={"/home"}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/createDog"}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
          };
        }}
      >
        Crear perros
      </NavLink>
    </header>
  );
}

export default Header;
