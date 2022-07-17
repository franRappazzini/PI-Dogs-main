export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";

const URL = "https://api.thedogapi.com/v1/breeds";

export function getDogs() {
  return async (dispatch) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
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
