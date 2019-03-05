import React, { Component } from "react";

export default class AnswerList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const { dogBreeds } = this.props;
    // const limit = 3;
    // const random = (array) => {
    // return array[Math.floor(Math.random() * array.length)]
    // }

    //Math.floor(Math.random() *

    const maxThree = () => {
      if (!dogBreeds) {
        return "Loading...";
      }
      let ranDogNum = Math.floor(Math.random() * dogBreeds.length);
      return <ul>{dogBreeds[ranDogNum]}</ul>;

      // else {
      //   return <ul>{dogBreeds.slice(0, limit).map(this.renderDogBreed)}</ul>;
      // }
    };
    //  [Math.floor(Math.random() * dogBreeds.length)]
    return (
      <div className="dogs-list">
        <h1>What breed am I?</h1>
        {maxThree()}
      </div>
    );
  }
}
