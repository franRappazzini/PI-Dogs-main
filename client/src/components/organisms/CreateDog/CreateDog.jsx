import "./CreateDog.css";

import { createDog, getTemperaments } from "../../../redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../molecules/Header/Header";
import React from "react";
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
    <>
      <Header />

      <main className="max-width">
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
                />
              </div>

              <div className="input_container">
                {/* TODO hacer entre y entre */}
                <label htmlFor="height">Altura:</label>
                <span>
                  Entre{" "}
                  <input
                    type="number"
                    name="min"
                    placeholder="min"
                    min={1}
                    value={height.min}
                    onChange={(e) =>
                      setHeight({ ...height, min: e.target.value })
                    }
                    className="input_min-max"
                  />{" "}
                  y{" "}
                  <input
                    type="number"
                    name="max"
                    placeholder="max"
                    min={2}
                    value={height.max}
                    onChange={(e) =>
                      setHeight({ ...height, max: e.target.value })
                    }
                    className="input_min-max"
                  />
                </span>
              </div>

              <div className="input_container">
                {/* TODO hacer entre y entre */}
                <label htmlFor="weight">Peso:</label>
                <span>
                  Entre{" "}
                  <input
                    type="number"
                    name="min"
                    placeholder="min"
                    min={1}
                    value={weight.min}
                    onChange={(e) =>
                      setWeight({ ...weight, min: e.target.value })
                    }
                    className="input_min-max"
                  />{" "}
                  y{" "}
                  <input
                    type="number"
                    name="max"
                    placeholder="max"
                    min={2}
                    value={weight.max}
                    onChange={(e) =>
                      setWeight({ ...weight, max: e.target.value })
                    }
                    className="input_min-max"
                  />
                </span>
              </div>

              <div className="input_container">
                <label htmlFor="life_span">Años de vida:</label>
                <span>
                  Entre{" "}
                  <input
                    type="number"
                    name="life_span"
                    placeholder="min"
                    min={1}
                    value={life_span.min}
                    onChange={(e) =>
                      setLifeSpan({ ...life_span, min: e.target.value })
                    }
                    className="input_min-max"
                  />{" "}
                  y{" "}
                  <input
                    type="number"
                    name="life_span"
                    placeholder="max"
                    min={1}
                    value={life_span.max}
                    onChange={(e) =>
                      setLifeSpan({ ...life_span, max: e.target.value })
                    }
                    className="input_min-max"
                  />
                </span>
              </div>
            </section>

            <section>
              <div className="input_container">
                <label htmlFor="temperaments">Temperamentos:</label>
                <select name="temperaments" onChange={handleAddTemp}>
                  <option value="select">Seleccionar..</option>
                  {temperaments.length > 0 &&
                    temperaments.map((temp) => (
                      <option key={temp.id} value={temp.name}>
                        {temp.name}
                      </option>
                    ))}
                </select>
              </div>
              {tempsSelected.length > 0 && (
                <div className="temperaments_container">
                  {/* TODO poner icono de remove */}
                  {/* TODO pensar como hacer este disenio */}
                  {tempsSelected.map((temp) => (
                    <p key={temp.temperaments} className="temperament_selected">
                      {temp.temperaments}
                      <span
                        id={`${temp.temperaments}`}
                        onClick={handleRemoveTemp}
                        title={"Remover"}
                      >
                        x
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </section>
          </section>

          <div className="btn-submit_container">
            <button type="submit">CREAR</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default CreateDog;
