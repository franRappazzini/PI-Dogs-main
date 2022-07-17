import { GET_DOGS, GET_DOG_DETAILS } from "../actions/dogActions";

const initialState = {
  dogs: [],
  dogDetails: [],
};

export function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG_DETAILS:
      return { ...state, dogDetails: action.payload };
    default:
      return state;
  }
}
