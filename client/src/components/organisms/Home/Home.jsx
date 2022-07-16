import { useDispatch, useSelector } from "react-redux";

import DogCard from "../../molecules/DogCard/DogCard";
import React from "react";
import { getDogs } from "../../../redux/actions/dogActions";
import { useEffect } from "react";

function Home() {
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());

    // console.log(dogs);
  }, [dispatch]);

  return (
    <section>
      <form action="">
        <input type="text" placeholder="Buscar raza.." />
        <select name="filterBy">
          <option value="default">-</option>
          <option value="temp">temp</option>
          <option value="raza">raza</option>
        </select>
        <select name="orderBy">
          <option value="default">-</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </form>
      <p></p>

      <section>
        {dogs.length > 0 &&
          dogs.map((dog) => <DogCard key={dog.id} {...dog} />)}
      </section>
    </section>
  );
}

export default Home;
