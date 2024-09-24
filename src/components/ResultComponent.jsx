import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/ResultComponent.css';

export default function ResultComponent() {
  const location = useLocation();
  const {
    score,
    totalQuestions,
    answeredQuestions,
    correctAnswers,
    wrongAnswers,
  } = location.state;

  const passingScore = totalQuestions * 0.7;
  const message =
    score >= passingScore
      ? 'Congratulations! You passed the quiz.'
      : 'You need more practice!';

  return (
    <div className="result">
      <h1>Result</h1>
      <div className="score-section">
        <h3>{message}</h3>
        <h1 className="score">Your score is {score}</h1>
        <div className="flex">
          <div className="details">
            <h5>Total number of questions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div className="number">
            <h5>{totalQuestions}</h5>
            <h5>{answeredQuestions}</h5>
            <h5>{correctAnswers}</h5>
            <h5>{wrongAnswers}</h5>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/play-quiz">
          <button className="play">Play Again</button>
        </Link>
        <Link to="/">
          <button className="home-result">Back to home</button>
        </Link>
      </div>
    </div>
  );
}
