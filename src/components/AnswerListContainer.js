import React, { Component } from "react";
import AnswerList from "./AnswerList";

export default class AnswerListContainer extends Component {

  render() {
    console.log("PROPSSSS", this.props.breedList)
    return <AnswerList checkAnswer={this.props.checkAnswer} dogBreeds={this.props.breedList} />;
  }
}
