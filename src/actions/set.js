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

export function setImage(payload) {
  return {
    type: "SET_IMAGE",
    payload: payload
  }
}