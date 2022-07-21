import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getDogs } from "../../../redux/actions/dogActions";
import imgDefault from "../../../assets/img/happy-happy-dog.gif";

function DogDetails() {
  const [dog, setDog] = useState({});
  const { breed } = useParams();
  const dogsApi = useSelector((state) => state.dogs.dogsApi);
  const dogsDb = useSelector((state) => state.dogs.dogsDb);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dogsApi.length > 0 && dogsDb.length > 0
      ? setDog(
          dogsApi.find((dog) => dog.name === breed) ||
            dogsDb.find((dog) => dog.name === breed)
        )
      : setDog({});
  }, [dogsApi, dogsDb, breed]);

  // para obtener los temperamentos de los perros creados
  const temperaments =
    typeof dog === "object" && dog.hasOwnProperty("Temperaments")
      ? dog.Temperaments.map((temp) => temp.name).join(", ")
      : "";

  return (
    <section className="max-width">
      <button onClick={() => navigate(-1)}>Home</button>

      {Object.keys(dog).length > 0 ? (
        <article>
          {/* TODO poner iconos al lado de altura, peso, etc */}
          <img
            src={dog.image ? dog.image.url : imgDefault}
            alt={`img-${dog.name}`}
          />
          <h3>{dog.name}</h3>
          {/* TODO agregar origen */}
          {/* <p>{dog.temperament}</p> */}
          <p>{dog.temperament || temperaments}</p>
          <p>{dog.weight.metric || dog.weight}</p>
          <p>{dog.height.metric || dog.height}</p>
          <p>{dog.life_span}</p>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default DogDetails;
