import request from "superagent";
import shuffleArray from "shuffle-array";
import { mathRandom } from '../lib/reusable'

function getRandomDogs(remainingBreeds, currentBreeds, count) {
  const shuffledBreeds = shuffleArray(remainingBreeds);
  const newBreeds = shuffledBreeds.slice(0, 3);
  const updatedRemainingBreeds = shuffledBreeds.slice(
    3,
    remainingBreeds.length
  );
  return {
    remainingBreeds: updatedRemainingBreeds,
    currentBreeds: [...currentBreeds, ...newBreeds]
  };
}

export function fetchBreedList() {
  return function (dispatch) {
    return request.get("https://dog.ceo/api/breeds/list/all").then(response => {
      const allBreeds = Object.keys(response.body.message);
      const { remainingBreeds, currentBreeds } = getRandomDogs(
        allBreeds,
        [],
        3
      );
      dispatch(
        setCorrectAnswer(
          currentBreeds[
          mathRandom(currentBreeds.length)
          ]
        )
      );
      dispatch(setBreedList(remainingBreeds));
      dispatch(setCurrentBreed(currentBreeds));
    });
  };
}

export function setCorrectAnswer(payload) {
  return {
    type: "SET_CORRECT_ANSWER",
    payload: payload
  };
}

export function setCurrentBreed(payload) {
  return {
    type: "SET_CURRENT_BREED",
    payload: payload
  };
}

export function setBreedList(payload) {
  return {
    type: "SET_BREEDLIST",
    payload: payload
  };
}
