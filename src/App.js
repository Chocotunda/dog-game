import React from "react";
import AnswerListContainer from "./components/AnswerListContainer";
import DogImage from "./components/DogImage";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">

          {props.correctAnswer === null ? <h1>Loading Image...</h1> : <DogImage />}

        </div>
        <div className="column eight">
        <AnswerListContainer/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    correctAnswer: state.game.correctAnswer,
  };
};

export default connect(mapStateToProps)(App);