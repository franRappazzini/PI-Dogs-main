import "./FormFilters.css";

import { FaDog, FaRegSmile, FaSortAmountDownAlt } from "react-icons/fa";

import React from "react";
import { useSelector } from "react-redux";

function FormFilters({ filter, handleChange, order, handleOrder }) {
  const temperament = useSelector((state) => state.dogs.temperaments);

  return (
    <form action="" className="filter-form_container">
      {/* TODO usar iconos para organizar order y filter */}
      <input
        type="text"
        placeholder="Buscar por raza"
        name="name"
        value={filter.name}
        onChange={handleChange}
      />

      <div>
        <FaRegSmile className="icon_filter" />
        <select name="temperament" onChange={handleChange}>
          <option value="">Todos</option>
          {temperament.length > 0 &&
            temperament.map((temp) => (
              <option key={temp.id} value={temp.name} onChange={handleChange}>
                {temp.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <FaDog className="icon_filter" />
        <select name="breed" onChange={handleChange}>
          {/* TODO ver si agregar 'todos' */}
          {/* <option value="all">todas</option> */}
          <option value="api">API</option>
          <option value="created">Creados</option>
        </select>
      </div>

      <div>
        <FaSortAmountDownAlt className="icon_filter" />
        <select name="orderBy" onChange={handleOrder}>
          {/* <option value="default">-</option> */}
          <option value="nameAsc">Raza asc</option>
          <option value="nameDesc">Raza desc</option>
          <option value="weightAsc">Peso asc</option>
          <option value="weightDesc">Peso desc</option>
        </select>
      </div>
    </form>
  );
}

export default FormFilters;
