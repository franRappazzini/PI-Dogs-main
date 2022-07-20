import "./DogCard.css";

import { Link } from "react-router-dom";
import React from "react";
import imgDefault from "../../../assets/img/happy-happy-dog.gif";

function DogCard({ image, name, temperament, weight, Temperaments }) {
  const temperaments = Temperaments
    ? Temperaments.map((temp) => temp.name).join(", ")
    : "";

  return (
    <Link to={`/dog/${name}`} className="article_dogCard">
      <img src={image ? image.url : imgDefault} alt="name" width={300} />
      <h3>{name}</h3>
      <p>{temperament || temperaments}</p>
      <p>{weight.metric || weight}</p>
    </Link>
  );
}

export default DogCard;
