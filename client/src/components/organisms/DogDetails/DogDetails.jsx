import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { getDogDetails } from "../../../redux/actions/dogActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DogDetails() {
  const { breed } = useParams();
  const dog = useSelector((state) => state.dogs.dogDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogDetails(breed));
  }, [breed, dispatch]);

  return (
    <section>
      {dog.length > 0 ? (
        <article>
          {/* TODO ver tema de imagen */}
          {/* TODO poner iconos al lado de altura, peso, etc */}
          {/* <img src={dog[0].image.url} alt={`img-${dog[0].name}`} /> */}
          <h3>{dog[0].name}</h3>
          <p>{dog[0].temperament}</p>
          <p>{dog[0].weight.metric}</p>
          <p>{dog[0].height.metric}</p>
          <p>{dog[0].life_span}</p>
        </article>
      ) : null}
    </section>
  );
}

export default DogDetails;
