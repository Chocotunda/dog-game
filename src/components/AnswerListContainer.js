import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBreedList } from '../actions/fetch'
import {setColor} from "../actions/buttonClick"
import {
  setCorrectAnswer,
  setCurrentBreed,
  setBreedList
} from "../actions/set"

class AnswerListContainer extends Component {
  componentDidMount() {
    this.props.fetchBreedList();
  }

  renderList (){
    return  this.props.currentBreedList
    .map(dat  => {
        return (<div key={dat}>
          <button style={this.props.color} 
          value={dat} onClick={()=>this.props.setColor('green')}>{dat}</button>
        </div>
      )
    } 
    )
  }

  render() {

    if (this.props.currentBreedList !==null) {
      return <div>{this.renderList()}</div>
    }
      return <h1>Loading Answer</h1> 
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: setCurrentBreed,
    correctAnswer: setCorrectAnswer,
    score: null,
    currentBreedList: state.game.currentBreeds,
    color: state.setColor
  };
};

export default connect(
  mapStateToProps,
  { fetchBreedList, setCorrectAnswer, setCurrentBreed, setBreedList, setColor }
)(AnswerListContainer);
