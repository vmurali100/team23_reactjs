import React, { useState } from 'react';

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "India", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Pakistan", correct: false },
      { text: "China", correct: false },
    ]
  }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="App">
      <h1>Simple Quiz</h1>
      <div className="Quiz">
        {showScore ? (
          <div>
            <h2>You scored {score} out of {questions.length}!</h2>
            <button id="next-btn" onClick={handleRestartQuiz}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h2>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</h2>
            <div id="answer-buttons">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className={`btn ${selectedAnswer !== null ? answer.correct ? 'correct' : 'incorrect' : ''}`}
                  onClick={() => handleAnswerClick(answer.correct)}
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
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
