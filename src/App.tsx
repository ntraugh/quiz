import React from 'react';
import Questions from './components/Questions';

const App = () => {
  const startTrivia = async () => {
    console.log("started")
  } 

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {


  }

  const goToNextQuestion = () => {


  }

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions....</p>
      <Questions/>
      <button onClick={goToNextQuestion}>Next</button>
    </div>
  );
}

export default App;
