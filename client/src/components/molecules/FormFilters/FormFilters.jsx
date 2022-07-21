import React from "react";
import { useSelector } from "react-redux";

function FormFilters({ filter, handleChange, order, handleOrder }) {
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
        {/* <option value="all">todas</option> */}
        <option value="api">API</option>
        <option value="created">Creadas</option>
      </select>

      <span>Ordenar por:</span>
      <select name="orderBy" onChange={handleOrder}>
        {/* <option value="default">-</option> */}
        <option value="nameAsc">Raza asc</option>
        <option value="nameDesc">Raza desc</option>
        <option value="weightAsc">Peso asc</option>
        <option value="weightDesc">Peso desc</option>
      </select>

      {/* <span>Peso:</span>
      <select name="orderByWeight" onChange={handleChange}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select> */}
    </form>
  );
}

export default FormFilters;
