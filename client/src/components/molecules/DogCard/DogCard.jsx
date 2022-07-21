import "./DogCard.css";

import { FaRegSmile, FaWeightHanging } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import Tilt from "react-parallax-tilt";
import imgDefault from "../../../assets/img/happy-happy-dog.gif";

function DogCard({ image, name, temperament, weight, Temperaments }) {
  const temperaments = Temperaments
    ? Temperaments.map((temp) => temp.name).join(", ")
    : "";

  return (
    <Tilt
      // tiltEnable={window.innerWidth < 900 ? false : true}
      tiltReverse={true}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      className="tilt_card"
    >
      <Link to={`/dog/${name}`} className="article_dogCard">
        <img src={image ? image.url : imgDefault} alt="name" />

        <h3>{name}</h3>
        <p>
          <FaRegSmile /> {temperament || temperaments}
        </p>
        <p>
          <FaWeightHanging /> {weight.metric || weight} kg
        </p>
      </Link>
    </Tilt>
  );
}

export default DogCard;
