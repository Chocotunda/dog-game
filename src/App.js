import React, { Component } from "react";
import "./App.css";
import DogsBreedImagesContainer from "./components/DogsBreedImagesContainer";
import AnswerListContainer from "./components/AnswerListContainer";
import request from "superagent";
import shuffleArray from "shuffle-array"

class App extends Component {
  state = { 
    remainingBreeds: null,
    currentBreeds: null,
    correctAnswer: null,
    correct: null,
  };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const breeds = Object.keys(response.body.message);
        this.updateBreeds(breeds, [], 3);
      })
      .catch(console.error);
  }

  getRandomDogs(remainingBreeds, currentBreeds, count){
    const shuffledBreeds = shuffleArray(remainingBreeds)
    const newBreeds = shuffledBreeds.slice(0, count)
    const updatedRemainingBreeds = shuffledBreeds.slice(count, remainingBreeds.length)
    return { 
      remainingBreeds: updatedRemainingBreeds,
      currentBreeds: [ ...currentBreeds, ...newBreeds ]
    }
  }

  updateBreeds(allBreeds, gameBreeds, count) {
    const { remainingBreeds, currentBreeds} = this.getRandomDogs(allBreeds, gameBreeds, count)
    this.setState({
      remainingBreeds,
      currentBreeds,
      correctAnswer: currentBreeds[Math.floor(Math.random() * Math.floor(currentBreeds.length))]
    });
  }

  checkAnswer = (breed) => {
    if(breed === this.state.correctAnswer){
      this.setState({ correct: true })
    } else {
      this.setState({ correct: false })
    }
  }

  renderAnswer(){
    return this.state.correct ? <h1>COREECT!!</h1> : <h1>WOOF. nope</h1>
  }

  render() {
    console.log(this.state)
    if(this.state.remainingBreeds === null) return <h1>Loading!</h1>

    return (
      <div className="App">
        <h1>Breaking Breeds</h1>
        <DogsBreedImagesContainer answer={this.state.correctAnswer}/>
        <AnswerListContainer checkAnswer={this.checkAnswer} breedList={this.state.currentBreeds}/>
        { this.state.correct !== null ? this.renderAnswer() : null }
      </div>
    );
  }
}

export default App;
