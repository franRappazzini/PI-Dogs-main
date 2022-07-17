import "./DogCard.css";

import { Link } from "react-router-dom";
import React from "react";

function DogCard({ image, name, temperament, weight }) {
  return (
    <Link to={`/dog/${name}`} className="article_dogCard">
      {/* <article className="article_dogCard"> */}
      <img src={image.url} alt="name" width={300} />
      <h3>{name}</h3>
      <p>{temperament}</p>
      <p>{weight.metric}</p>
      {/* </article> */}
    </Link>
  );
}

export default DogCard;
