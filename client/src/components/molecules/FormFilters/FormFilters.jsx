import React from "react";

function FormFilters({ filter, handleChange }) {
  return (
    <form action="">
      {/* TODO usar iconos para organizar order y filter */}
      <input
        type="text"
        placeholder="Buscar raza.."
        name="search"
        value={filter.search}
        onChange={handleChange}
      />
      <span>Temperamento:</span>
      <select name="temperament" onChange={handleChange}>
        <option value="">-</option>
        <option value="active">active</option>
        <option value="default">-</option>
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
