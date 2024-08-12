import React, { useState } from 'react';
import './third.css'; // Create this file or use inline styles

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="app">
      <h1>Simple Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}!</h2>
          <button id="restart" onClick={handleRestartQuiz}>Play Again</button>
        </div>
      ) : (
        <div className="quiz">
          <h2 id="question">
            {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
          </h2>
          <div id="answer-buttons">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className={`btn ${selectedAnswer !== null ? (answer.correct ? "correct" : "incorrect") : ""}`}
                onClick={() => handleAnswerOptionClick(answer.correct)}
                disabled={selectedAnswer !== null}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <button
            id="next-btn"
            onClick={handleNextQuestion}
            style={{ display: selectedAnswer !== null ? 'block' : 'none' }}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Show Score' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
