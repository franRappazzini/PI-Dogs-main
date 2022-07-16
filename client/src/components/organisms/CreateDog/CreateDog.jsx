import React from "react";

function CreateDog() {
  // TODO validar form con regex

  return (
    <section>
      <form action="">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" placeholder="Nombre" />

        <label htmlFor="height">Altura:</label>
        <input type="text" name="height" placeholder="Altura" />

        <label htmlFor="weight">Peso:</label>
        <input type="text" name="weight" placeholder="Peso" />

        <label htmlFor="life">Años de vida:</label>
        <input type="number" name="life" placeholder="Años de vida" min={1} />

        {/* TODO ver como agregar uno o mas temperamentos */}

        <button type="submit">CREAR</button>
      </form>
    </section>
  );
}

export default CreateDog;
