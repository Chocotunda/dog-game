import React, { Component } from "react";
import shuffleArray from "shuffle-array";


export default class Shuffle extends Component {

  render() {
    const wrongAnswer = this.props.shuffle1
    const anotherWrongAnswer = this.props.shuffle2
    const goodAnswer = this.props.shuffle3

    const list = [wrongAnswer, anotherWrongAnswer, goodAnswer]
    shuffleArray(list)

    return <ul>
      <li>{wrongAnswer}</li>
      <li>{anotherWrongAnswer}</li>
      <li>{goodAnswer}</li>
    </ul>
  }
}
