import React, { Component } from "react";
import Shuffle from './Shuffle'

export default class AnswerList extends Component {


  render() {
    const { dogBreeds } = this.props

    const optionalAnswer = () => {
      if (!dogBreeds) {
        return "Loading..."
      }
      let ranDogNum = Math.floor(Math.random() * dogBreeds.length);
      return <ul>{dogBreeds[ranDogNum]}</ul>;
    }

      return <Shuffle shuffle1={optionalAnswer()} shuffle2={optionalAnswer()} shuffle3={optionalAnswer()}/>


    
  }
}
