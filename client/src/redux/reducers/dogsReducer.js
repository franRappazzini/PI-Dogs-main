import {
  FILTER_TEMP,
  GET_DOGS,
  GET_DOG_DETAILS,
  GET_TEMPERAMENTS,
} from "../actions/dogActions";

const initialState = {
  dogsApi: [],
  dogsDb: [],
  dogDetails: [],
  temperaments: [],
  copyDogsApi: [],
  copyDogsDb: [],
};

export function dogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogsApi: action.payload,
        dogsDb: action.payloadDb,
        copyDogsApi: action.payload,
        copyDogsDb: action.payloadDb,
      };
    case GET_DOG_DETAILS:
      return { ...state, dogDetails: action.payload };
    case FILTER_TEMP:
      return {
        ...state,
        [action.dogs]: state[action.dogsFilter].filter(
          (dog) =>
            (dog.temperament && dog.temperament.includes(action.payload)) ||
            (dog.Temperaments &&
              dog.Temperaments.map((temp) => temp.name)
                .join(", ")
                .includes(action.payload))
        ),
      };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    default:
      return state;
  }
}
