import React, { Component } from "react";
import request from "superagent";
import { connect } from "react-redux";
// import { setCorrectAnswer } from "../actions/fetch";

class DogImage extends Component {
  state = { dogBreedUrl: null };

  fetchDogImage() {
    const exactBreed = this.props.image;
    request
      .get("https://dog.ceo/api/breed/" + exactBreed + "/images")
      .then(response => {
        const breed =
          response.body.message[
            Math.floor(Math.random() * Math.floor(response.body.message.length))
          ];
        this.setState({ dogBreedUrl: breed });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.fetchDogImage();
    }
  }

  render() {
    console.log(this.state);
    if (this.props.image !== null && this.state.dogBreedUrl !== null) {
      return <img height={"200px"} src={this.state.dogBreedUrl} />;
    }

    return <h1>Loading</h1>;
    console.log("PROPE", this.props.image);
  }
}

const mapStateToProps = state => {
  console.log("MPSTE", state.game.correctAnswer);
  return { image: state.game.correctAnswer };
};

export default connect(mapStateToProps)(DogImage);
