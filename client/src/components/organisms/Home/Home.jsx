import React, { useState } from "react";
import {
  filterTemperament,
  getDogs,
  getTemperaments,
} from "../../../redux/actions/dogActions";

import DogCardContainer from "../../molecules/DogCard/DogCardContainer";
import FormFilters from "../../molecules/FormFilters/FormFilters";
import Header from "../../molecules/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const [filter, setFilter] = useState({
    name: "",
    breed: "api",
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
    <section className="component_container">
      <Header />

      <main className="max-width">
        <FormFilters
          filter={filter}
          handleChange={handleChange}
          order={order}
          handleOrder={handleOrder}
        />

        <DogCardContainer filter={filter} order={order} />
      </main>
    </section>
  );
}

export default Home;
