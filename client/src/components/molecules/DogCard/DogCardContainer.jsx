import "./DogCardContainer.css";

import React, { useState } from "react";

import DogCard from "./DogCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function DogCardContainer({ filter }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const dogs = useSelector((state) => state.dogs.dogs);
  useEffect(() => {
    const arr = Object.values(filter).filter((val) => val !== "");

    // TODO esta mal asi
    // TODO pensar si cambiar las key del filter
    arr.length > 0
      ? setDogsFilter(
          dogs.filter((dog) =>
            arr.forEach((fil) =>
              dog.name.toLowerCase().includes(fil.toLowerCase())
            )
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
