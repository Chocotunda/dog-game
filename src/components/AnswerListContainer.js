import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBreed } from "../actions/index";

class AnswerListContainer extends Component {
  renderList() {
    return this.props.breeds.map(dog => {
      return (
        <div className="item" key={dog.breed}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectBreed(dog)}
            >
              Select
            </button>
          </div>
          <div className="content">{dog.breed}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // console.log("state",state);
  return { breeds: state.breed };
};

export default connect(
  mapStateToProps,
  { selectBreed }
)(AnswerListContainer);
