import "./Main.css";

import { Link } from "react-router-dom";
import React from "react";

function Main() {
  return (
    <main className="main">
      <h3>Bienvenido al Proyecto Individual de Dogs</h3>

      <p>
        Creado por{" "}
        <a
          href="https://rappazzini-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Francisco Rappazzini
        </a>
      </p>

      <Link to={"/home"}>
        <button>INGRESAR A LA APP</button>
      </Link>
    </main>
  );
}

export default Main;
