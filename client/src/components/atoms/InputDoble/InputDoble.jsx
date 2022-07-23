import React from "react";

function InputDoble({ value, setState, label }) {
  return (
    <div className="input_container">
      <label htmlFor="height">{label}:</label>
      <span>
        Entre{" "}
        <input
          type="number"
          name="min"
          placeholder="min"
          min={1}
          value={value.min} // height.min
          onChange={(e) => setState({ ...value, min: e.target.value })} // (e) => setHeight({ ...height, min: e.target.value })
          className="input_min-max"
          autoComplete={"off"}
        />{" "}
        y{" "}
        <input
          type="number"
          name="max"
          placeholder="max"
          min={2}
          value={value.max} // height.max
          onChange={(e) => setState({ ...value, max: e.target.value })} // (e) => setHeight({ ...height, max: e.target.value })
          className="input_min-max"
          autoComplete={"off"}
        />
      </span>
    </div>
  );
}

export default InputDoble;
