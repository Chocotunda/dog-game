import React, { Component } from 'react'

export default class AnswerList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}
    </li>
  }

  render() {
    const { dogBreeds } = this.props
    const shuffleArray = require('shuffle-array')
    console.log(dogBreeds)
    const limit = 3
    const maxThree = () => {
      if (!dogBreeds) {
        return 'Loading...'
      } shuffleArray(dogBreeds)
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

