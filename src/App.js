import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img
            src="https://static.valentinosdisplays.com/originalimages/medium/2741-dog-mannequin-uk.jpg"
            alt="dummy dog"
          />
        </div>
        <div>
          <ul>
            <li>Question 1</li>
            <li>Question 2</li>
            <li>Question 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
