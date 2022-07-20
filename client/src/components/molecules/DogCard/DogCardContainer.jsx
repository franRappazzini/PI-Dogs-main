import "./DogCardContainer.css";

import React, { useState } from "react";

import DogCard from "./DogCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function DogCardContainer({ filter }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const dogs = useSelector((state) => state.dogs.dogs);

  useEffect(() => {
    // TODO pensar como filtrar
    dogs && filter.name !== ""
      ? setDogsFilter(
          dogs.filter((dog) =>
            dog.name.toLowerCase().includes(filter.name.toLowerCase())
          )
        )
      : setDogsFilter(dogs);
  }, [filter, dogs]);

  return (
    <section className="container_dogCard">
      {dogsFilter.length > 0 &&
        dogsFilter.map((dog) => <DogCard key={dog.id} {...dog} />)}
    </section>
  );
}

export default DogCardContainer;
