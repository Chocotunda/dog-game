import React from "react";
import AnswerListContainer from "./components/AnswerListContainer";
import DogImage from "./components/DogImage";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <DogImage />
        </div>
        <div className="column eight wide">
          <AnswerListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
