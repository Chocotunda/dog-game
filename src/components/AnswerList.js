import React, { Component } from "react";

export default class AnswerList extends Component {
  // renderDogBreed(breed) {
  //   return <li key={breed}>{breed}</li>;
  // }

  render() {
    const { dogBreeds } = this.props;

    const optionalAnswer = () => {
      if (!dogBreeds) {
        return "Loading...";
      }
      let ranDogNum = Math.floor(Math.random() * dogBreeds.length);
      return <ul>{dogBreeds[ranDogNum]}</ul>;
    };

    return (
      <div className="dogs-list">
        <h1>What breed am I?</h1>
        {optionalAnswer()}
      </div>
    );
  }
}
