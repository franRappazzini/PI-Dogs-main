import "./DogDetails.css";

import {
  FaArrowsAltV,
  FaHeart,
  FaMapMarkerAlt,
  FaRegSmile,
  FaWeightHanging,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../molecules/Header/Header";
import Loader from "../../atoms/Loader/Loader";
import { getDogs } from "../../../redux/actions/dogActions";
import imgDefault from "../../../assets/img/dog.jpg";

function DogDetails() {
  const [dog, setDog] = useState({});
  const { breed } = useParams();
  const dogsApi = useSelector((state) => state.dogs.dogsApi);
  const dogsDb = useSelector((state) => state.dogs.dogsDb);
  const dispatch = useDispatch();

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
    <section className="component_container--dogDetail">
      <Header />

      <main className="max-width dogDetail_container">
        <section className="breadcrumb">
          <span>
            <Link to={"/home"}>Dogs</Link> / {breed ? breed : ""}
          </span>
        </section>

        {typeof dog === "object" && Object.keys(dog).length > 0 ? (
          <article className="dogDetail_article">
            <img
              src={dog.image ? dog.image.url : imgDefault}
              alt={`img-${dog.name}`}
            />

            <section className="details_container">
              <h2>{dog.name}</h2>
              {(dog.temperament || temperaments) && (
                <p>
                  <FaRegSmile className="icon_detail" />
                  {dog.temperament || temperaments}
                </p>
              )}
              {dog.origin && (
                <p>
                  <FaMapMarkerAlt className="icon_detail" />
                  {dog.origin}
                </p>
              )}
              <p>
                <FaWeightHanging className="icon_detail" />
                {dog.weight.metric || dog.weight} kg
              </p>
              <p>
                <FaArrowsAltV className="icon_detail" />
                {dog.height.metric || dog.height} cm
              </p>
              <p>
                <FaHeart className="icon_detail" />
                {dog.life_span}
              </p>
            </section>
          </article>
        ) : (
          <Loader />
        )}
      </main>
    </section>
  );
}

export default DogDetails;
