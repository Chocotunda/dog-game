import React, {Component} from 'react'
import request from 'superagent'
import DogsBreedImages from './DogsBreedImages'


export default class DogBreedImagesContainer extends Component {
  state = { images: null, params: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    
    request
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return (
    <DogsBreedImages match={this.props.match} images={ this.state.images } />
    )
  }
}