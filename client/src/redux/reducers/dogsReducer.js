import {
  GET_DOGS,
  GET_DOG_DETAILS,
  GET_TEMPERAMENTS,
} from "../actions/dogActions";

const initialState = {
  dogs: [],
  dogDetails: [],
  temperaments: [],
};

export function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG_DETAILS:
      return { ...state, dogDetails: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    default:
      return state;
  }
}
