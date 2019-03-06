import React, { Component } from "react";
import { connect } from "react-redux";

class AnswerListContainer extends Component {
  render() {
    return <div>AnswerList</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect()(AnswerListContainer);
