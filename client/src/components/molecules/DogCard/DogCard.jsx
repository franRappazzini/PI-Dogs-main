import "./DogCard.css";

import React from "react";

function DogCard({ image, name, temperament, weight }) {
  return (
    <article className="article_dogCard">
      <img src={image.url} alt="name" width={300} />
      <h3>{name}</h3>
      <p>{temperament}</p>
      <p>{weight.metric}</p>
    </article>
  );
}

export default DogCard;
