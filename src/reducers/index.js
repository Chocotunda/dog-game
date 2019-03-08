import { combineReducers } from "redux";
const initialState = {
  currentBreeds: null,
  correctAnswer: null,
  image: null,
  score: null
};

const dogBreedListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_BREEDLIST":
      return action.payload;

    default:
      return state;
  }
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_BREED":
      return { ...state, currentBreeds: action.payload }
    case "SET_CORRECT_ANSWER":
      return { ...state, correctAnswer: action.payload }
    case "SET_IMAGE":
      return {...state, image: action.payload }
    default:
      return state;
  }
}

const buttonReducer = (state = { color: 'red' }, action) =>{
  switch (action.type) {
    case "SET_COLOR":
      return {...state,  color: action.payload }
    default:
      return state;
  }}

export default combineReducers({
  game: gameReducer,
  dogBreedList: dogBreedListReducer,
  setColor: buttonReducer
});
