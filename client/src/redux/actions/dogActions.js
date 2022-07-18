import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";

const URL = "https://api.thedogapi.com/v1/breeds";
const URLDB = "http://localhost:3001/dogs";

export function getDogs() {
  return async (dispatch) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const resDb = await fetch(URLDB);
      const dataDb = await resDb.json();

      const allDogs = [...data, ...dataDb];
      dispatch({ type: GET_DOGS, payload: allDogs });
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

export async function createDog(dog) {
  const { name, height, weight, life_span } = dog;

  try {
    const newDog = { name, height, weight, life_span };
    await axios.post("http://localhost:3001/dogs", newDog);
    return { success: "Creado con exito" };
  } catch (err) {
    return { error: err.message };
  }
}
