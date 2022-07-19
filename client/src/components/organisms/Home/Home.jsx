import "./Home.css";

import React, { useState } from "react";
import { getDogs, getTemperaments } from "../../../redux/actions/dogActions";

import DogCardContainer from "../../molecules/DogCard/DogCardContainer";
import FormFilters from "../../molecules/FormFilters/FormFilters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const [filter, setFilter] = useState({
    name: "",
    breed: "",
    temperament: "",
    orderByName: "",
    orderByWeight: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

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
