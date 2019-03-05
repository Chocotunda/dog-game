import React, { Component } from "react";

export default class DogsBreedImages extends Component {
  renderDogBreed(breed) {
    return (
      <li key={breed}>
        <img src={breed} alt={breed} />
      </li>
    );
  }

  render() {
    const { dogBreeds } = this.props;
    const sliceNumber = Math.floor(Math.random() * 5);
    return (
      <div className="dogs-images">
        <h1>Breaking Breeds</h1>

        {!dogBreeds && "Loading..."}

        {dogBreeds && (
          <ul>
            {dogBreeds
              .slice(sliceNumber, sliceNumber + 1)
              .map(this.renderDogBreed)}
          </ul>
        )}
      </div>
    );
  }
}
