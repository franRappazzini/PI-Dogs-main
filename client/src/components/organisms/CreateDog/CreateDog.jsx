import "./CreateDog.css";

import { createDog, getTemperaments } from "../../../redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CreateDog() {
  // TODO validar form con regex (OBLIGATORIO)
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
  });
  const [tempsSelected, setTempsSelected] = useState([]);
  const temperaments = useSelector((state) => state.dogs.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();

    await createDog(form, tempsSelected);

    setForm({ name: "", height: "", weight: "", life_span: "" });
    setTempsSelected([]);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleAddTemp(e) {
    // TODO limitar cantidad a 5-8
    for (const key of tempsSelected) {
      if (key.temperaments === e.target.value) return;
    }

    setTempsSelected([...tempsSelected, { [e.target.name]: e.target.value }]);
  }

  function handleRemoveTemp(e) {
    setTempsSelected(
      tempsSelected.filter((temp) => temp.temperaments !== e.target.id)
    );
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
          <label htmlFor="temperaments">Temperamentos:</label>
          <select name="temperaments" onChange={handleAddTemp}>
            <option value="">Seleccionar..</option>
            {temperaments.length > 0 &&
              temperaments.map((temp) => (
                <option key={temp.id} value={temp.name}>
                  {temp.name}
                </option>
              ))}
          </select>

          <div className="temperaments_container">
            {/* TODO poner icono de remove */}
            {/* TODO pensar como hacer este disenio */}
            {tempsSelected.length > 0 &&
              tempsSelected.map((temp) => (
                <p key={temp.temperaments} className="temperament_selected">
                  {temp.temperaments}{" "}
                  <span id={`${temp.temperaments}`} onClick={handleRemoveTemp}>
                    x
                  </span>
                </p>
              ))}
          </div>
        </section>

        <button type="submit">CREAR</button>
      </form>
    </section>
  );
}

export default CreateDog;
