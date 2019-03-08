import request from "superagent";
import shuffleArray from "shuffle-array";
import { mathRandom } from '../lib/reusable'
import { setCorrectAnswer, setCurrentBreed, setBreedList } from './set'

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
      )
      dispatch(
        setCorrectAnswer(
          currentBreeds[
          mathRandom(currentBreeds.length)
          ]
        )

      )
      dispatch(setCurrentBreed(currentBreeds)) 
      dispatch(setBreedList(remainingBreeds))
    })
  }
}
