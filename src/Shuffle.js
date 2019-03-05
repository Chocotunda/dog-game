import React, { Component } from 'react'
import shuffleArray from 'shuffle-array'

export default class Shuffle extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
      {breed}
    </li>
  }

  render() {
    const { dogBreeds } = this.props
    console.log('before shuffle:', dogBreeds)
    if (dogBreeds) {
      shuffleArray(dogBreeds)
      console.log('after shuffle:', dogBreeds)
    }
    const limit = 3
    const maxThree = () => {
      if (!dogBreeds) {
        return 'Loading...'
      } 

      return <ul>{dogBreeds.slice(0, limit).map(this.renderDogBreed)}</ul>
    }

    return (
      <div className="dogs-list">
        <h1>What breed am I?</h1>
        {maxThree()}
      </div>
    )
  }
}

