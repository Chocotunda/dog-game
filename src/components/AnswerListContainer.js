import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedList } from '../actions/fetch'
import {
  setCorrectAnswer,
  setCurrentBreed,
  setBreedList
} from "../actions/set"

class AnswerListContainer extends Component {
  componentDidMount() {
    this.props.fetchBreedList();
  }

  render() {
    return <div>Hell World</div>;
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
