import "./CreateDog.css";

import { createDog, getTemperaments } from "../../../redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../atoms/Button/Button";
import Header from "../../molecules/Header/Header";
import InputDoble from "../../atoms/InputDoble/InputDoble";
import React from "react";
import TemperamentSelected from "../../atoms/TemperamentSelected/TemperamentSelected";
import { useEffect } from "react";
import { useState } from "react";

function CreateDog() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState({ min: 1, max: "" });
  const [weight, setWeight] = useState({ min: 1, max: "" });
  const [life_span, setLifeSpan] = useState({ min: 1, max: "" });
  const [tempsSelected, setTempsSelected] = useState([]);
  const temperaments = useSelector((state) => state.dogs.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    regexValidation();

    const heightStr = `${height.min} - ${height.max}`;
    const weightStr = `${weight.min} - ${weight.max}`;
    const life_spanStr = `${life_span.min} - ${life_span.max} years`;

    const dataDog = {
      name,
      height: heightStr,
      weight: weightStr,
      life_span: life_spanStr,
    };

    await createDog(dataDog, tempsSelected);

    setName("");
    setHeight({ min: 1, max: "" });
    setWeight({ min: 1, max: "" });
    setLifeSpan({ min: 1, max: "" });
    setTempsSelected([]);
  }

  function handleAddTemp(e) {
    if (tempsSelected.length > 6) return; // TODO crear modal para alert
    if (e.target.value === "select") return;
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

  function regexValidation() {
    // TODO volver a poner required
    // TODO hacer modal para cada uno de estos errores
    if (!name.match(/^[a-zA-Z\s]*$/)) alert("error name");
    else if (height.min >= height.max) alert("error height");
    else if (weight.min >= weight.max) alert("error weight");
    else if (life_span.min >= life_span.max) alert("error life_span");
  }

  return (
    <section className="component_container">
      <Header />

      <main className="max-width form_container">
        <form action="" className="form_createDog" onSubmit={handleSubmit}>
          <section className="selectors_container">
            <section>
              <div className="input_container">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input_unique"
                  autoComplete={"off"}
                  required
                />
              </div>

              <InputDoble value={height} setState={setHeight} label="Altura" />

              <InputDoble value={weight} setState={setWeight} label="Peso" />

              <InputDoble
                value={life_span}
                setState={setLifeSpan}
                label="Años de vida"
              />
            </section>

            <section>
              <TemperamentSelected
                temperaments={temperaments}
                tempsSelected={tempsSelected}
                handleAddTemp={handleAddTemp}
                handleRemoveTemp={handleRemoveTemp}
              />
            </section>
          </section>

          <div className="btn-submit_container">
            <Button type={"submit"} text={"Crear"} />
          </div>
        </form>
      </main>
    </section>
  );
}

export default CreateDog;
