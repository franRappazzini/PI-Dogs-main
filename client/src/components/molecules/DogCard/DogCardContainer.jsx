import "./DogCardContainer.css";

import React, { useEffect, useState } from "react";

import DogCard from "./DogCard";
import Loader from "../../atoms/Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

function DogCardContainer({ filter, setFilter, refOrder }) {
  const [dogsFilter, setDogsFilter] = useState([]);
  const { allDogs, dogsApi, dogsDb } = useSelector((state) => state.dogs);
  const [page, setPage] = useState(1);
  const dogsPerPage = 8;
  const totalPage = Math.ceil(dogsFilter.length / dogsPerPage);

  useEffect(() => {
    if (dogsFilter.length) {
      if (filter.order === "nameAsc") {
        setDogsFilter(
          [...dogsFilter].sort((a, b) => a.name.localeCompare(b.name))
        );
      } else if (filter.order === "nameDesc") {
        setDogsFilter(
          [...dogsFilter].sort((a, b) => b.name.localeCompare(a.name))
        );
      } else if (filter.order === "weightAsc") {
        setDogsFilter(
          [...dogsFilter].sort(
            (a, b) => returnNum(a.weight, 0) - returnNum(b.weight, 0)
          )
        );
      } else if (filter.order === "weightDesc") {
        setDogsFilter(
          [...dogsFilter].sort(
            (a, b) => returnNum(b.weight, 1) - returnNum(a.weight, 1)
          )
        );
      }
    }
  }, [filter.order]);

  useEffect(() => {
    if (filter.breed === "all") {
      if (filter.name !== "") {
        setFilter({ ...filter, order: "nameAsc" });
        refOrder.current.value = "nameAsc";
        setDogsFilter(
          [...allDogs].filter((dog) =>
            dog.name.toLowerCase().includes(filter.name.toLowerCase())
          )
        );
      } else if (allDogs.length > 0) {
        setDogsFilter(allDogs);
      } else setDogsFilter([]);
    } else if (filter.breed === "api") {
      if (filter.name !== "") {
        setFilter({ ...filter, order: "nameAsc" });
        refOrder.current.value = "nameAsc";
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
        setFilter({ ...filter, order: "nameAsc" });
        refOrder.current.value = "nameAsc";
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
  }, [filter.name, filter.breed, dogsApi, dogsDb, allDogs]);

  function returnNum(weight, pos) {
    if (weight.metric && weight.metric.includes("-")) {
      if (isNaN(parseInt(weight.metric.split(" - ")[pos]))) return -1;
      return parseInt(weight.metric.split(" - ")[pos]);
    } else if (weight.metric) {
      if (isNaN(weight.metric)) return -1;
      return parseInt(weight.metric);
    } else if (typeof weight === "string") {
      return parseInt(weight.split(" - ")[pos]);
    }
  }

  return (
    <section className="section_dogCard">
      {dogsFilter.length === 0 ? (
        <Loader />
      ) : (
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      )}

      <div className="container_cards">
        {dogsFilter.length > 0 &&
          dogsFilter
            .slice(
              (page - 1) * dogsPerPage,
              (page - 1) * dogsPerPage + dogsPerPage
            )
            .map((dog) => <DogCard key={dog.id} {...dog} />)}
      </div>

      {dogsFilter.length > 0 && (
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      )}
    </section>
  );
}

export default DogCardContainer;
