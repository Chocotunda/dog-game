import React, { Component } from "react";
// import shuffleArray from "shuffle-array";

export default class Shuffle extends Component {
  handleClick = () => {
    return this.props.rightAnswer()
  }
  render() {
    const wrongAnswer = this.props.shuffle1
    const anotherWrongAnswer = this.props.shuffle2
    const goodAnswer = this.props.shuffle3

    // const list = [wrongAnswer, anotherWrongAnswer, goodAnswer]
    // shuffleArray(list)

    return <ul>
      <button onClick={this.handleClick}>{wrongAnswer}</button>
      <button onClick={this.handleClick}>{anotherWrongAnswer}</button>
      <button onClick={this.handleClick}>{goodAnswer}</button>
    </ul>
  }
}
