import "./DogCardContainer.css";

import DogCard from "./DogCard";
import React from "react";
import { useSelector } from "react-redux";

function DogCardContainer({ filter }) {
  const dogs = useSelector((state) => state.dogs.dogs);

  const dogsFilter =
    filter.search !== ""
      ? dogs.filter((dog) =>
          dog.name.toLowerCase().includes(filter.search.toLowerCase())
        )
      : dogs;

  return (
    <section className="container_dogCard">
      {dogsFilter.length > 0 &&
        dogsFilter.map((dog) => <DogCard key={dog.id} {...dog} />)}
    </section>
  );
}

export default DogCardContainer;
