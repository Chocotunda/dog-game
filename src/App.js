import React from "react";
import AnswerListContainer from './components/AnswerListContainer';


const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <AnswerListContainer/>
        </div>
        <div className="column eight wide">
        </div>
      </div>
    </div>
  );
};

export default App;
