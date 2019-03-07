import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedList, setCorrectAnswer, setCurrentBreed, setBreedList} from "../actions/fetch";

class AnswerListContainer extends Component {
  componentDidMount() {
    this.props.fetchBreedList();
    // return this.state;
  }

  render(props) {
    console.log("----", this.setCurrentBreed)
    return <div>
      <button></button>
      <button></button>
      <button></button>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: setCurrentBreed,
    correctAnswer: setCorrectAnswer,
    score: null
  };
};

export default connect(
  mapStateToProps,
  { fetchBreedList, setCorrectAnswer, setCurrentBreed, setBreedList }
)(AnswerListContainer);
