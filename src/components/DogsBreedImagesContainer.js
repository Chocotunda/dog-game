import React, { Component } from "react";
import request from "superagent";
import DogsBreedImages from "./DogsBreedImages";
import shuffleArray from "shuffle-array";

export default class DogsBreedImagesContainer extends Component {
  state = { dogBreed: null };

  componentDidMount() {
    const exactBreed = this.props.answer;
    request
      .get("https://dog.ceo/api/breed/" + exactBreed + "/images")
      .then(response => {
        const breed = response.body.message;
        this.setState({ dogBreed: breed })
      })
      .catch(console.error);
  }

  render() {
    return <DogsBreedImages dogBreeds={this.state.dogBreed} />;
  }
}
