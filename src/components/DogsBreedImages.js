import React, { Component } from 'react'

export default class DogsBreedImages extends Component {

  renderDogBreed(breed) {
    return <li key={breed}>
      <img src = "https://dog.ceo/api/breeds/image/random" alt={breed} />
      {breed}
    </li>
  }

  render() {
    const { dogBreeds } = this.props

    return (
      <div className="dogs-images">
        <h1>Dogs Breed Images</h1>

        {!dogBreeds && 'Loading...'}

        {dogBreeds &&
          <ul>{dogBreeds.map(this.renderDogBreed)}</ul>
        }
      </div>
    )
  }
}