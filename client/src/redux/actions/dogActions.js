export const GET_DOGS = "GET_DOGS";

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
