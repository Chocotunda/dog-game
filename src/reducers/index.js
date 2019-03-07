import { combineReducers } from "redux";

const breedReducer = () => {
  return [
    { breed: "Poop", answer: "Wrong" },
    { breed: "Pooper", answer: "Wrong" },
    { breed: "PoopieVonPoopenStein", answer: "Correct" }
  ];
};

const selectedBreedReducer = (selectedBreed = null, action) => {
  if (action.type === "BREED_SELECTED") {
    return action.payload;
  }
  return selectedBreed;
};

export default combineReducers({
  breed: breedReducer,
  selectedBreed: selectedBreedReducer
});
