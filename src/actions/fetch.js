import request from "superagent";
import shuffleArray from "shuffle-array";

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
  return function(dispatch) {
    return request.get("https://dog.ceo/api/breeds/list/all").then(response => {
      const allBreeds = Object.keys(response.body.message);
      const { remainingBreeds, currentBreeds } = getRandomDogs(
        allBreeds,
        [],
        3
      );
      dispatch(setCorrectAnswer(currentBreeds[Math.floor(Math.random() * Math.floor(currentBreeds.length))]))
      dispatch(setBreedList(remainingBreeds));
      dispatch(setCurrentBreed(currentBreeds));
    });
  };
}



function setCorrectAnswer(payload) {
  return {
    type: "SET_CORRECT_ANSWER",
    payload: payload
  }
}

function setCurrentBreed(payload) {
  return {
    type: "SET_CURRENT_BREED",
    payload: payload
  };
}

function setBreedList(payload) {
  return {
    type: "SET_BREEDLIST",
    payload: payload
  };
}
