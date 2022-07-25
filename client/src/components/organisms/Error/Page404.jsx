import "./Page404.css";

import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import React from "react";
import dogMeme from "../../../assets/img/dog-meme.png";

function Page404() {
  return (
    <main className="max-width error_page">
      <section>
        <h1>Error 404</h1>
        <p>Lo sentimos, página no encontrada</p>
        <img src={dogMeme} alt="dog meme" />
        <Link to={"/"}>
          <Button text={"Volver al inicio"} />
        </Link>
      </section>
    </main>
  );
}

export default Page404;
