import "./CreateDog.css";

import React from "react";
import { createDog } from "../../../redux/actions/dogActions";
import { useState } from "react";

function CreateDog() {
  // TODO validar form con regex (OBLIGATORIO)
  const [cant, setCant] = useState(1);
  const [temperamentInput, setTemperamentInput] = useState([
    <input
      key={cant}
      type="text"
      name={`Temperamento ${cant}`}
      placeholder={`Temperamento ${cant}`}
    />,
  ]);
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await createDog(form);

    setForm({ name: "", height: "", weight: "", life_span: "" });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleClick() {
    if (cant < 5) {
      setTemperamentInput([
        ...temperamentInput,
        <input
          key={cant + 1}
          type="text"
          name={`temperament${cant + 1}`}
          placeholder={`Temperamento ${cant + 1}`}
        />,
      ]);

      setCant(cant + 1);
    } else alert("no se pueden agrgegar mas temperamentos");
  }

  return (
    <section>
      <form action="" className="form_createDog" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            name="height"
            placeholder="Altura"
            required
            value={form.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="weight">Peso:</label>
          <input
            type="text"
            name="weight"
            placeholder="Peso"
            required
            value={form.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="life_span">Años de vida:</label>
          <input
            type="number"
            name="life_span"
            placeholder="Años de vida"
            min={1}
            value={form.life_span}
            onChange={handleChange}
          />
        </div>

        {/* TODO pensar logica con back y db para los checkbox 
        sino un input separados por comas + split
        sino renderizando con btn*/}
        <section>
          <label htmlFor="temperament">Temperamentos:</label>
          {temperamentInput}
          <button type="button" onClick={handleClick}>
            Agregar mas temperamentos
          </button>
        </section>

        <button type="submit">CREAR</button>
      </form>
    </section>
  );
}

export default CreateDog;
