import React, { Component } from "react";
import shuffleArray from "shuffle-array";


export default class Shuffle extends Component {
  handleClick = (value) => {
    if (value === "true") {
      return this.goodAnswer(), this.progressBar()
    } else {
      return this.badAnswer()
    }
  }

  progressBar = () => {
    console.log('making progress')
  }

  goodAnswer = () => {
    console.log('you are correct!')
    // show next question with render
  }

  badAnswer = () => {
    console.log('Whoops, wrong answer')
    // timeOut 2 sec && goodAnswer
  }

  render() {
    const wrongAnswer = this.props.shuffle1
    const anotherWrongAnswer = this.props.shuffle2
    const rightAnswer = this.props.shuffle3

    const list = [wrongAnswer, anotherWrongAnswer, rightAnswer]
    console.log(list, 'normal')
    shuffleArray(list)


    return <ul>
      <li onClick={() => this.handleCLick(wrongAnswer)}>{wrongAnswer}</li>
      <li onClick={() => this.handleClick(anotherWrongAnswer)}>{anotherWrongAnswer}</li>
      <li onClick={() => this.handleClick(rightAnswer)}>{rightAnswer}</li>
    </ul>
  }
}
