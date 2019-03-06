import React, { Component } from "react";
import "./App.css";
import DogsBreedImagesContainer from "./components/DogsBreedImagesContainer";
import AnswerListContainer from "./components/AnswerListContainer";
import request from "superagent";

class App extends Component {
  state = { dogBreeds: null };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const breeds = Object.keys(response.body.message);
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
    return (
      <div className="App">
        <h1>Breaking Breeds</h1>
        <DogsBreedImagesContainer />
        <AnswerListContainer breedList={this.state.dogBreeds}/>
      </div>
    );
  }
}

export default App;
