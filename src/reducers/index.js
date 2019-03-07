import { combineReducers } from "redux";

const breedReducer = () => {
  return [
    { breed: "Poop", answer: "Wrong" },
    { breed: "Pooper", answer: "Wrong" },
    { breed: "PoopieVonPoopenStein", answer: "Correct" }
  ];
};

const initialState = {
  currentBreeds: null,
  correctAnswer: null,
  correct: null,
}

const selectedBreedReducer = (selectedBreed = null, action) => {
  if (action.type === "BREED_SELECTED") {
    return action.payload;
  }
  return selectedBreed;
};

const remainingBreeds = (state = null, action){
  // deals with breed we are not using -> store 84 breeds here (and leave them for now)
}



const game = (state = initialState, action){
  // 
}

export default combineReducers({
  breed: breedReducer,
  selectedBreed: selectedBreedReducer
});
