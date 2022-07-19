import React from "react";
import { useSelector } from "react-redux";

function FormFilters({ filter, handleChange }) {
  const temperament = useSelector((state) => state.dogs.temperaments);

  return (
    <form action="">
      {/* TODO usar iconos para organizar order y filter */}
      <input
        type="text"
        placeholder="Buscar raza.."
        name="name"
        value={filter.name}
        onChange={handleChange}
      />

      <span>Temperamento:</span>
      <select name="temperament" onChange={handleChange}>
        <option value="">Todos</option>
        {temperament.length > 0 &&
          temperament.map((temp) => (
            <option key={temp.id} value={temp.name} onChange={handleChange}>
              {temp.name}
            </option>
          ))}
      </select>

      <span>Filtrar:</span>
      <select name="breed" onChange={handleChange}>
        <option value="all">todas</option>
        <option value="api">api</option>
        <option value="created">creadas</option>
      </select>

      <span>Nombre:</span>
      <select name="orderByName" onChange={handleChange}>
        {/* <option value="default">-</option> */}
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <span>Peso:</span>
      <select name="orderByWeight" onChange={handleChange}>
        {/* <option value="default">-</option> */}
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </form>
  );
}

export default FormFilters;
