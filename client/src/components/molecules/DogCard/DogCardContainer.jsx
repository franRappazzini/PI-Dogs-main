import "./DogCardContainer.css";

import React, { useState } from "react";

import DogCard from "./DogCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function DogCardContainer({ filter }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const dogs = useSelector((state) => state.dogs.dogs);

  useEffect(() => {
    const arrFilters = Object.entries(filter);
    console.log(arrFilters);
    // TODO esta mal asi
    filter.length > 0
      ? setDogsFilter(
          arrFilters.forEach((fil) =>
            dogs.filter(
              (dog) =>
                fil[1] !== "" &&
                dog[fil[0]].toLowerCase().includes(fil[1].toLowerCase())
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
