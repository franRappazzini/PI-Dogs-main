import "./Home.css";

import React, { useState } from "react";
import {
  getDogs,
  getDogsDB,
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
    temperament: "",
    orderByName: "",
    orderByWeight: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    filter.breed === "api" ? dispatch(getDogs()) : dispatch(getDogsDB());

    dispatch(getTemperaments());
  }, [filter.breed, dispatch]);

  function handleChange(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section>
      <FormFilters filter={filter} handleChange={handleChange} />

      <DogCardContainer filter={filter} />
    </section>
  );
}

export default Home;
