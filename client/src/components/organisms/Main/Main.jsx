import "./Main.css";

import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import React from "react";

function Main() {
  return (
    <main className="main_container component_container">
      <section>
        <h1>Bienvenido al Proyecto Individual de Dogs</h1>
        <Link to={"/home"} className="btn_go-home">
          <Button text={"Ingresar a la app"} />
        </Link>
        <p>
          2022 - Creado por{" "}
          <a
            href="https://rappazzini-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="i"
          >
            Francisco Rappazzini
          </a>
        </p>{" "}
      </section>
    </main>
  );
}

export default Main;
