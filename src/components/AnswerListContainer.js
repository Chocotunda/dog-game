import React, { Component } from "react";
import Shuffle from "./Shuffle";

export default class AnswerList extends Component {
  render() {
    console.log(this.props.breedList);

    const { breedList } = this.props;

    const optionalAnswer = () => {
      if (!breedList) {
        return "Loading...";
      }
      let ranDogNum = Math.floor(Math.random() * breedList.length);
      return <ul>{breedList[ranDogNum]}</ul>;
    };

    return (
      <Shuffle
        shuffle1={optionalAnswer()}
        shuffle2={optionalAnswer()}
        shuffle3={optionalAnswer()}
      />
    );
  }
}
