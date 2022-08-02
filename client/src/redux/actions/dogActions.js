import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMP = "FILTER_TEMP";

const URL_API = "https://api.thedogapi.com/v1/breeds";

export function getDogs() {
  return async (dispatch) => {
    try {
      const res = await axios(URL_API);
      const resDb = await axios("/dogs");

      const allDogs = [...res.data, ...resDb.data];

      dispatch({
        type: GET_DOGS,
        payload: res.data,
        payloadDb: resDb.data,
        allDogs,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function filterTemperament(temperament, dogs, dogsFilter) {
  return (dispatch) => {
    dispatch({ type: FILTER_TEMP, payload: temperament, dogs, dogsFilter });
  };
}

export async function createDog(dog, temps) {
  const { name, height, weight, life_span } = dog;

  // TODO es mejor hacer logica aca o en server? 🤔
  const temperaments = [];
  if (temps.length) {
    temps.forEach((temp) => temperaments.push(temp.temperaments));
  }

  try {
    const newDog = { name, height, weight, life_span };
    await axios.post("/dogs", { ...newDog, temperaments });
    return { success: "Creado con exito" };
  } catch (err) {
    return { error: err.message };
  }
}

export function getTemperaments() {
  return async (dispatch) => {
    try {
      const res = await axios("/temperaments");

      dispatch({ type: GET_TEMPERAMENTS, payload: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };
}
