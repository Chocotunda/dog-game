const initialState = {
  options: ["akita", "elkhound", "shitzu"],
  correct: "akita",
  imageUrl: "This is an Image"
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
