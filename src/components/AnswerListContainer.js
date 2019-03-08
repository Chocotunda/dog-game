import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedList, setCorrectAnswer, setCurrentBreed, setBreedList} from "../actions/fetch";
import {setColor} from "../actions/buttonClick"

class AnswerListContainer extends Component {
  componentDidMount() {
    this.props.fetchBreedList();
    // return this.state;
  }

  renderList (){
    // console.log("STATES",this.state)
    // console.log("PROPS", this.props.currentBreedList)

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
 //   console.log("----", )
    if (this.props.currentBreedList !==null) {
      return <div>{this.renderList()}</div>
    }
      return <h1>Loading Answer</h1> 
  }
}

const mapStateToProps = state => {
  console.log("hey", state)
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
