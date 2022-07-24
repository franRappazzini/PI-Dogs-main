import "./DogCardContainer.css";

import React, { useEffect, useState } from "react";

import DogCard from "./DogCard";
import Loader from "../../atoms/Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { useRef } from "react";
import { useSelector } from "react-redux";

const dogsPerPage = 8;

function DogCardContainer({ filter, order }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const { dogsApi, dogsDb, copyDogsApi, copyDogsDb } = useSelector(
    (state) => state.dogs
  );
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(dogsFilter.length / dogsPerPage);
  const ref = useRef();

  useEffect(() => {
    if (filter.temperament !== "") {
      if (filter.breed === "api") {
        setDogsFilter(copyDogsApi);
      } else if (filter.breed === "created") {
        // TODO pensar aca como hacer en caso de que no existan creado
        setDogsFilter(copyDogsDb);
      }
      console.log("HOLA");
    }

    setPage(1);
  }, [filter.temperament, filter.breed, copyDogsDb, copyDogsApi]);

  useEffect(() => {
    if (dogsFilter.length) {
      if (order === "nameAsc") {
        setDogsFilter(
          [...dogsFilter].sort((a, b) => a.name.localeCompare(b.name))
        );
      } else if (order === "nameDesc") {
        setDogsFilter(
          [...dogsFilter].sort((a, b) => b.name.localeCompare(a.name))
        );
      } else if (order === "weightAsc") {
        setDogsFilter(
          [...dogsFilter].sort(
            (a, b) =>
              (a.weight.metric &&
                // paso los primeros dos valores a numeros
                parseInt(`${a.weight.metric[0]}${a.weight.metric[1]}`) -
                  parseInt(`${b.weight.metric[0]}${b.weight.metric[1]}`)) ||
              (a.weight && a.weight - b.weight) // para los perros creados
          )
        );
      } else if (order === "weightDesc") {
        setDogsFilter(
          [...dogsFilter].sort(
            (a, b) =>
              (b.weight.metric &&
                // paso los ultimos dos valores a numeros
                parseInt(`${b.weight.metric.at(-2) + b.weight.metric.at(-1)}`) -
                  parseInt(
                    `${a.weight.metric.at(-2) + a.weight.metric.at(-1)}`
                  )) ||
              (b.weight && b.weight - a.weight) // para los perros creados
          )
        );
      }
    }
  }, [order]);

  useEffect(() => {
    if (filter.breed === "api") {
      if (filter.name !== "") {
        setDogsFilter(
          [...dogsApi].filter((dog) =>
            dog.name.toLowerCase().includes(filter.name.toLowerCase())
          )
        );
      } else if (dogsApi.length > 0) {
        setDogsFilter(dogsApi);
      } else setDogsFilter([]);
    } else if (filter.breed === "created") {
      if (filter.name !== "") {
        setDogsFilter(
          [...dogsDb].filter((dog) =>
            dog.name.toLowerCase().includes(filter.name.toLowerCase())
          )
        );
      } else if (dogsDb.length > 0) {
        setDogsFilter(dogsDb);
      } else setDogsFilter([]);
    }

    setPage(1);
    console.log("prbando");
  }, [filter.name, filter.breed, dogsApi, dogsDb]);

  return (
    <section className="section_dogCard" ref={ref}>
      {dogsFilter.length === 0 ? (
        <Loader />
      ) : (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={totalPage}
          reference={ref}
        />
      )}

      <div className="container_cards">
        {dogsFilter.length > 0 &&
          dogsFilter
            // .filter((dog) =>
            //   dog.name.toLowerCase().includes(filter.name.toLowerCase())
            // )
            .slice(
              (page - 1) * dogsPerPage,
              (page - 1) * dogsPerPage + dogsPerPage
            )
            .map((dog) => <DogCard key={dog.id} {...dog} />)}
      </div>

      {dogsFilter.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={totalPage}
          reference={ref}
        />
      )}
    </section>
  );
}

export default DogCardContainer;
