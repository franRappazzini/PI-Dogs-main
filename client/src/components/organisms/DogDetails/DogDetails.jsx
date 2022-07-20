import React, { useMemo } from "react";
import { getDogs, getDogsDB } from "../../../redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";

import imgDefault from "../../../assets/img/happy-happy-dog.gif";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DogDetails() {
  const { breed } = useParams();
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  const dog =
    dogs.length > 0 && breed ? dogs.find((dog) => dog.name === breed) : {};

  // useEffect(() => {
  //   // dispatch(getDogs());

  //   console.log("first");
  // }, [dog, dispatch]);

  // typeof dog === "object" && dog.hasOwnProperty("Temperaments")
  //   ? dispatch(getDogsDB())
  //   : dispatch(getDogs);

  const temperaments =
    typeof dog === "object" && dog.hasOwnProperty("Temperaments")
      ? dog.Temperaments.map((temp) => temp.name).join(", ")
      : "";

  return (
    <section>
      {dog.name && (
        <article>
          {/* TODO poner iconos al lado de altura, peso, etc */}
          <img
            src={dog.image ? dog.image.url : imgDefault}
            alt={`img-${dog.name}`}
          />
          <h3>{dog.name}</h3>
          {/* <p>{dog.temperament}</p> */}
          <p>{dog.temperament || temperaments}</p>
          <p>{dog.weight.metric || dog.weight}</p>
          <p>{dog.height.metric || dog.height}</p>
          <p>{dog.life_span}</p>
        </article>
      )}
    </section>
  );
}

export default DogDetails;
