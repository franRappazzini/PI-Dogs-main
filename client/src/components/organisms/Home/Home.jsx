import "./Home.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DogCard from "../../molecules/DogCard/DogCard";
import { getDogs } from "../../../redux/actions/dogActions";
import { useEffect } from "react";

function Home() {
  const [breed, setBreed] = useState("");
  const [dogsSearched, setDogsSearched] = useState([]);
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());

    // filtro de busqueda
    dogs && breed !== ""
      ? setDogsSearched(
          dogs.filter((dog, i) =>
            dog.name.toLowerCase().includes(breed.toLowerCase())
          )
        )
      : setDogsSearched(dogs);
    // console.log(dogs);
  }, [dispatch, breed, dogs]);

  function handleChange(e) {
    setBreed(e.target.value);
  }

  return (
    <section>
      <form action="">
        <input
          type="text"
          placeholder="Buscar raza.."
          value={breed}
          onChange={handleChange}
        />
        <select name="filterBy">
          <option value="default">-</option>
          <option value="temp">temp</option>
          <option value="raza">raza</option>
        </select>
        <select name="orderBy">
          <option value="default">-</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </form>

      {/* TODO aca hacerle un container */}
      <section className="probando">
        {dogsSearched.length > 0 &&
          dogsSearched.map((dog) => <DogCard key={dog.id} {...dog} />)}
      </section>
    </section>
  );
}

export default Home;
