import "./CreateDog.css";

import { createDog, getTemperaments } from "../../../redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../atoms/Button/Button";
import Header from "../../molecules/Header/Header";
import InputDoble from "../../atoms/InputDoble/InputDoble";
import ModalError from "../../atoms/Modal/Modal";
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
  const [modal, setModal] = useState({
    text: "",
    error: false,
    success: false,
  });
  const temperaments = useSelector((state) => state.dogs.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (regexValidation()) return;

    const heightStr = `${height.min} - ${height.max}`;
    const weightStr = `${weight.min} - ${weight.max}`;
    const life_spanStr = `${life_span.min} - ${life_span.max} years`;

    const dataDog = {
      name,
      height: heightStr,
      weight: weightStr,
      life_span: life_spanStr,
    };

    const res = await createDog(dataDog, tempsSelected);

    // TODO no obtiene error que yo envio 🤔
    if (res.error) {
      return setModal({
        text: res.error,
        error: true,
        success: false,
      });
    }

    setModal({
      text: `"${name}" creado con exito!`,
      error: false,
      success: true,
    });

    setName("");
    setHeight({ min: 1, max: "" });
    setWeight({ min: 1, max: "" });
    setLifeSpan({ min: 1, max: "" });
    setTempsSelected([]);
  }

  function handleAddTemp(e) {
    if (tempsSelected.length > 6) {
      return setModal({
        text: "No puedes seleccionar más de 7 temperamentos",
        error: true,
        success: false,
      });
    }
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
    if (!name.match(/^[a-zA-Z\s]*$/)) {
      setModal({
        text: "El nombre solo debe contener letras",
        error: true,
        success: false,
      });
      return true;
    } else if (parseInt(height.min) >= parseInt(height.max)) {
      setModal({
        text: "La altura minima debe ser mayor a 1 y menor a la altura maxima",
        error: true,
        success: false,
      });
      return true;
    } else if (parseInt(weight.min) >= parseInt(weight.max)) {
      setModal({
        text: "El peso minimo debe ser mayor a 1 y menor al peso maximo",
        error: true,
        success: false,
      });
      return true;
    } else if (parseInt(life_span.min) >= parseInt(life_span.max)) {
      setModal({
        text: "La edad minima debe ser mayor a 1 y menor a la edad maxima",
        error: true,
        success: false,
      });
      return true;
    } else return false;
  }

  function onClose() {
    setModal({ text: "", error: false, success: false });
  }

  return (
    <section className="component_container">
      <Header />

      <main className="max-width form_container ">
        {(modal.error || modal.success) && (
          <ModalError modal={modal} onClose={onClose} />
        )}

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
