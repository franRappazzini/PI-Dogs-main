import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

const URL = "https://api.thedogapi.com/v1/breeds";
const URL_DOGS = "http://localhost:3001/dogs";
const URL_TEMP = "http://localhost:3001/temperaments";

export function getDogs() {
  return async (dispatch) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      // const resDb = await fetch(URL_DOGS);
      // const dataDb = await resDb.json();

      // const allDogs = [...data, ...dataDb];
      dispatch({ type: GET_DOGS, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function getDogDetails(breed) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${URL}/search?q=${breed}`);
      const data = await res.json();
      dispatch({ type: GET_DOG_DETAILS, payload: data });
    } catch (err) {
      console.log(err.message);
    }
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
    await axios.post("http://localhost:3001/dogs", { ...newDog, temperaments });
    return { success: "Creado con exito" };
  } catch (err) {
    return { error: err.message };
  }
}

export function getTemperaments() {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_TEMP);
      const data = await res.json();

      dispatch({ type: GET_TEMPERAMENTS, payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
}
