import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedList } from "../actions/fetch";

class AnswerListContainer extends Component {
  componentDidMount() {
    console.log("CP3O", this.props.fetchBreedList());
    this.props.fetchBreedList();
    // return this.state;
  }

  render() {
    console.log(this.props);
    return <div>Hell World</div>;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    dogBreedList: state.dogBreedList
  };
};

export default connect(
  mapStateToProps,
  { fetchBreedList }
)(AnswerListContainer);
