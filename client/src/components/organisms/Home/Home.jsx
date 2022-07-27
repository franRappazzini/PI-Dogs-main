import React, { useRef, useState } from "react";
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
    breed: "all",
    order: "nameAsc",
    temperament: "",
  });
  const dispatch = useDispatch();
  // TODO ver si sacar refTemp (no se usa actualmente)
  const refTemp = useRef();
  const refOrder = useRef();

  useEffect(() => {
    if (filter.temperament !== "") {
      let dogs = "";
      if (filter.breed === "all") dogs = "allDogs";
      else if (filter.breed === "api") dogs = "dogsApi";
      else if (filter.breed === "created") dogs = "dogsDb";

      let dogsFilter = "";
      if (filter.breed === "all") dogsFilter = "copyAllDogs";
      else if (filter.breed === "api") dogsFilter = "copyDogsApi";
      else if (filter.breed === "created") dogsFilter = "copyDogsDb";

      setFilter({ ...filter, order: "nameAsc" });
      refOrder.current.value = "nameAsc";
      dispatch(filterTemperament(filter.temperament, dogs, dogsFilter));
    } else {
      dispatch(getDogs());
      dispatch(getTemperaments());
    }
  }, [dispatch, filter.breed, filter.temperament]);

  function handleChange(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section className="component_container">
      <Header />

      <main className="max-width">
        <FormFilters
          filter={filter}
          handleChange={handleChange}
          refTemp={refTemp}
          refOrder={refOrder}
        />

        <DogCardContainer
          filter={filter}
          setFilter={setFilter}
          refTemp={refTemp}
          refOrder={refOrder}
        />
      </main>
    </section>
  );
}

export default Home;
