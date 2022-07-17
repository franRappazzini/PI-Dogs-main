import "./CreateDog.css";

import React from "react";
import { useState } from "react";

function CreateDog() {
  // TODO validar form con regex (OBLIGATORIO)
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setForm({ name: "", height: "", weight: "", life_span: "" });
  }

  return (
    <section>
      <form action="" className="form_createDog" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" placeholder="Nombre" required />

        <label htmlFor="height">Altura:</label>
        <input type="text" name="height" placeholder="Altura" required />

        <label htmlFor="weight">Peso:</label>
        <input type="text" name="weight" placeholder="Peso" required />

        <label htmlFor="life_span">Años de vida:</label>
        <input
          type="number"
          name="life_span"
          placeholder="Años de vida"
          min={1}
        />

        {/* TODO pensar logica con back y db para los checkbox */}
        <label htmlFor="temp1">
          <input type="checkbox" name="temp1" id="temp1" /> temperament 1
        </label>
        <label htmlFor="temp2">
          <input type="checkbox" name="temp2" id="temp2" /> temperament 2
        </label>
        <label htmlFor="temp3">
          <input type="checkbox" name="temp3" id="temp3" /> temperament 3
        </label>

        <button type="submit">CREAR</button>
      </form>
    </section>
  );
}

export default CreateDog;
