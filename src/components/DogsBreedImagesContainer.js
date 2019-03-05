import React, { Component } from "react";
import request from "superagent";
import DogsBreedImages from "./DogsBreedImages";

export default class DogsBreedImagesContainer extends Component {
  state = { dogBreeds: null };

  componentDidMount() {
    const exactBreed = "akita";
    request

      .get("https://dog.ceo/api/breed/" + exactBreed + "/images")
      .then(response => {
        const breeds = response.body.message;
        this.updateBreeds(breeds);
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  render() {
    return <DogsBreedImages dogBreeds={this.state.dogBreeds} />;
  }
}
