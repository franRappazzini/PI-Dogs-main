import "./Home.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DogCard from "../../molecules/DogCard/DogCard";
import FormFilters from "../../molecules/FormFilters/FormFilters";
import { getDogs } from "../../../redux/actions/dogActions";
import { useEffect } from "react";

function Home() {
  const [filter, setFilter] = useState({
    search: "",
    breed: "",
    temperament: "",
    orderByName: "",
    orderByWeight: "",
  });
  const [dogsSearched, setDogsSearched] = useState([]);
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());

    // console.log(dogsSearched);

    dogs.length > 0 && filter.search !== ""
      ? setDogsSearched(
          dogs.filter((dog) =>
            dog.name.toLowerCase().includes(filter.search.toLowerCase())
          )
        )
      : setDogsSearched(dogs);
  }, [dispatch, dogs, filter]);

  // console.log(filter);

  function handleChange(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section>
      <FormFilters filter={filter} handleChange={handleChange} />

      {/* TODO aca hacerle un container */}
      <section className="probando">
        {dogsSearched.length > 0 &&
          dogsSearched.map((dog) => <DogCard key={dog.id} {...dog} />)}
      </section>
    </section>
  );
}

export default Home;
