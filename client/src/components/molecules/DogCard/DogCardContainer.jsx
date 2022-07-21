import "./DogCardContainer.css";

import React, { useEffect, useState } from "react";

import DogCard from "./DogCard";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

const dogsPerPage = 8;

function DogCardContainer({ filter, order }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const { dogsApi, dogsDb, copyDogsApi, copyDogsDb } = useSelector(
    (state) => state.dogs
  );
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(dogsFilter.length / dogsPerPage);

  useEffect(() => {
    if (dogsApi.length > 0 && filter.breed === "api") {
      setDogsFilter(dogsApi);
    } else if (dogsDb.length > 0 && filter.breed === "created") {
      // TODO pensar aca como hacer en caso de que no existan creados
      setDogsFilter(dogsDb);
    } else setDogsFilter([]);

    setPage(1);
  }, [dogsApi, dogsDb, filter.breed]);

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
    // TODO ver como hacer aca, porque al ir filtrando con lo ya filtrado
    // no puedo volver atras al eliminar lo buscado
    if (filter.name !== "") {
      setDogsFilter(
        [...dogsFilter].filter((dog) =>
          dog.name.toLowerCase().includes(filter.name.toLowerCase())
        )
      );
    }

    setPage(1);
  }, [filter.name]);

  return (
    <section className="container_dogCard">
      {dogsFilter.length > 0 &&
        dogsFilter
          .slice(
            (page - 1) * dogsPerPage,
            (page - 1) * dogsPerPage + dogsPerPage
          )
          .map((dog) => <DogCard key={dog.id} {...dog} />)}

      {dogsFilter.length === 0 && <p>Loading...</p>}

      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </section>
  );
}

export default DogCardContainer;
