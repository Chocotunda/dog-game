import React from "react";
import { connect } from "react-redux";

const AnswerDetail = ({ myAnswer }) => {
  if (!myAnswer) {
    console.log(myAnswer);
    return <div>Select an Answer</div>;
  }
  return (
    <div>
      <h3>Your selected answer is:</h3>
      <p>
        Breed: {myAnswer.breed}
        <br />
        Awnser: {myAnswer.answer}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { myAnswer: state.selectedBreed };
};

export default connect(mapStateToProps)(AnswerDetail);
