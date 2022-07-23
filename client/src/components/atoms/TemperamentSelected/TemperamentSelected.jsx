import React from "react";

function TemperamentSelected({
  temperaments,
  tempsSelected,
  handleAddTemp,
  handleRemoveTemp,
}) {
  return (
    <>
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
    </>
  );
}

export default TemperamentSelected;
