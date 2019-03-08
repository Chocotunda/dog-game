import { combineReducers } from "redux";
const initialState = {
  currentBreeds: null,
  correctAnswer: null,
  score: null
};

const dogBreedListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_BREEDLIST":
      return action.payload;

    default:
      return state;
  }
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_BREED":
      return { ...state, currentBreeds: action.payload };
    case "SET_CORRECT_ANSWER":
      return { ...state, correctAnswer: action.payload };
    default:
      return state;
  }
};

const buttonReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "BUTTON_CLICK":
      return {...state, score: action.payload }
    default:
      return state;
  }
}

// const remainingBreeds = (state = null, action){
//   // deals with breed we are not using -> store 84 breeds here (and leave them for now)
// }

// const game = (state = initialState, action){
//   //
// }

export default combineReducers({
  game: gameReducer,
  dogBreedList: dogBreedListReducer,
  buttonClick: buttonReducer
});
