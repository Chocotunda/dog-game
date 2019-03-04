import React, { Component } from 'react'

export default class AnswerList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
    </li>
  }
  render() {
    const { dogBreeds } = this.props

    return (
      <div className="dogs-list">
        <h1>What breed am I?</h1>

        {!dogBreeds && 'Loading...'}

        {dogBreeds &&
          <ul>{dogBreeds.map(this.renderDogBreed)}</ul>
        }
      </div>
    )
  }
}