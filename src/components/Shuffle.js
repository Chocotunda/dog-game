import React, { Component } from "react";
import shuffleArray from "shuffle-array";

export default class Shuffle extends Component {
  handleClick = value => {
    return console.log("ouch");
  };

  render() {
    const wrongAnswer = this.props.shuffle1;
    const anotherWrongAnswer = this.props.shuffle2;
    const rightAnswer = this.props.shuffle3;

    const list = [wrongAnswer, anotherWrongAnswer, rightAnswer];
    console.log(list, "normal");
    shuffleArray(list);

    return (
      <ul>
        <li onClick={() => this.handleClick(wrongAnswer)}>{wrongAnswer}</li>
        <li onClick={() => this.handleClick(anotherWrongAnswer)}>
          {anotherWrongAnswer}
        </li>
        <li onClick={() => this.handleClick(rightAnswer)}>{rightAnswer}</li>
      </ul>
    );
  }
}
