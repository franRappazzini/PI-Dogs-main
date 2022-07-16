import { GET_DOGS } from "../actions/dogActions";

const initialState = {
  dogs: [],
};

export function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    default:
      return state;
  }
}
