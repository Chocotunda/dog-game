import React, { Component } from "react";
import request from "superagent";
import { connect } from "react-redux";
// import { setCorrectAnswer } from "../actions/fetch";

class DogImage extends Component {
  componentDidMount() {
        const exactBreed = this.props.answer;
        request
          .get("https://dog.ceo/api/breed/" + exactBreed + "/images")
          .then(response => {
            const breed = response.body.message;
            this.setState({ dogBreed: breed });
          })
          .catch(console.error);
      }
  }
  render() {
    const exactBreed = this.props.image
    if (this.props.image !== null) {
      return 
     }


    console.log("PROPE", this.props.image);
    return <h1>IMAAAAGE</h1>;
  }
}

const mapStateToProps = state => {
  console.log("MPSTE", state.game.correctAnswer);
  return { image: state.game.correctAnswer };
};

export default connect(mapStateToProps)(DogImage);
