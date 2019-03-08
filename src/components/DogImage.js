import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogImage } from '../actions/fetchDog'

class DogImage extends Component {

  componentDidMount() {
    this.props.fetchDogImage(this.props.correctAnswer);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.correctAnswer !== this.props.correctAnswer) {
      this.props.fetchDogImage(this.props.correctAnswer);
    }
  }

  render() {
    if (this.props.correctAnswer !== null && this.props.image !== null) {
      return <img height={"200px"} src={this.props.image} />;
    }

    return <h1>Loading...</h1>;
  }
}

const mapStateToProps = state => {
  return {
    correctAnswer: state.game.correctAnswer,
    image: state.game.image
  };
};

export default connect(mapStateToProps, { fetchDogImage })(DogImage);
