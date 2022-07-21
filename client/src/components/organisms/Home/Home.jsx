import "./Home.css";

import React, { useState } from "react";
import {
  filterTemperament,
  getDogs,
  getTemperaments,
} from "../../../redux/actions/dogActions";

import DogCardContainer from "../../molecules/DogCard/DogCardContainer";
import FormFilters from "../../molecules/FormFilters/FormFilters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const [filter, setFilter] = useState({
    name: "",
    breed: "api",
    // orderBy: "nameAsc",
    temperament: "",
  });
  const [order, setOrder] = useState("nameAsc");
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter.temperament !== "") {
      const dogs = filter.breed === "api" ? "copyDogsApi" : "copyDogsDb";
      const dogsFilter = filter.breed === "api" ? "dogsApi" : "dogsDb";
      dispatch(filterTemperament(filter.temperament, dogs, dogsFilter));
    } else {
      dispatch(getDogs());
      dispatch(getTemperaments());
    }

    console.log("first");
  }, [dispatch, filter.breed, filter.temperament]);

  useEffect(() => {}, [filter.temperament, dispatch, filter.breed]);

  function handleChange(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  }

  function handleOrder(e) {
    setOrder(e.target.value);
  }

  return (
    <section>
      <FormFilters
        filter={filter}
        handleChange={handleChange}
        order={order}
        handleOrder={handleOrder}
      />

      <DogCardContainer filter={filter} order={order} />
    </section>
  );
}

export default Home;
