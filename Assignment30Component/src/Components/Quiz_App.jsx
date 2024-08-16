import React, { Component } from 'react';
const styles = {
    body: {
        background: '#001e4d',
        margin: 0,
        padding: 0,
        fontFamily: "'Poppins', sans-serif",
        boxSizing: 'border-box'
    },
    app: {
        background: '#fff',
        width: '90%',
        maxWidth: '600px',
        margin: '100px auto 0',
        borderRadius: '10px',
        padding: '30px'
    },
    header: {
        fontSize: '25px',
        color: '#001e4d',
        fontWeight: 600,
        borderBottom: '1px solid #333',
        paddingBottom: '10px'
    },
    quiz: {
        padding: '20px 0'
    },
    question: {
        fontSize: '18px',
        color: '#001e4d',
        fontWeight: 600
    },
    btn: {
        background: '#fff',
        color: '#222',
        fontWeight: 500,
        width: '100%',
        border: '1px solid #222',
        padding: '10px',
        margin: '10px 0',
        textAlign: 'left',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    btnHover: {
        background: '#222',
        color: '#fff'
    },
    btnDisabled: {
        cursor: 'not-allowed'
    },
    nextBtn: {
        background: '#001e4d',
        color: '#fff',
        fontWeight: 500,
        width: '150px',
        border: '0',
        padding: '10px',
        margin: '20px auto 0',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'none'
    },
    correct: {
        background: '#9aeabc'
    },
    incorrect: {
        background: '#ff9393'
    },
    startBtn: {
        background: '#001e4d',
        color: '#fff',
        fontWeight: 500,
        width: '150px',
        border: '0',
        padding: '10px',
        margin: '20px auto',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

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

class QuizApp extends Component {
    state = {
        currentQuestionIndex: 0,
        score: 0,
        quizStarted: false,
        nextButtonVisible: false
    };

    startQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            score: 0,
            quizStarted: true
        });
    };

    showQuestion = () => {
        const { currentQuestionIndex } = this.state;
        const currentQuestion = questions[currentQuestionIndex];
        return (
            <div style={styles.quiz}>
                <h2 style={styles.question}>{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                <div id="answer-buttons">
                    {currentQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            style={styles.btn}
                            data-correct={answer.correct}
                            onClick={this.selectAnswer}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
                <button
                    id="next-btn"
                    onClick={this.handleNextButton}
                    style={{ ...styles.nextBtn, display: this.state.nextButtonVisible ? 'block' : 'none' }}
                >
                    Next
                </button>
            </div>
        );
    };

    resetState = () => {
        this.setState({ nextButtonVisible: false });
    };

    selectAnswer = (e) => {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            this.setState(prevState => ({ score: prevState.score + 1 }));
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(document.querySelectorAll('#answer-buttons .btn')).forEach(button => {
            button.disabled = true;
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
        this.setState({ nextButtonVisible: true });
    };

    showScore = () => {
        this.resetState();
        return (
            <div style={styles.quiz}>
                <h2 style={styles.question}>You scored {this.state.score} out of {questions.length}!</h2>
                <button
                    id="next-btn"
                    onClick={this.startQuiz}
                    style={styles.startBtn}
                >
                    Play Again
                </button>
            </div>
        );
    };

    handleNextButton = () => {
        const nextQuestionIndex = this.state.currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            this.setState({ currentQuestionIndex: nextQuestionIndex, nextButtonVisible: false });
        } else {
            this.setState({ quizStarted: false });
        }
    };

    render() {
        const { quizStarted, currentQuestionIndex } = this.state;
        return (
            <div className="App" style={styles.app}>
                <h1 style={styles.header}>Simple Quiz</h1>
                <div className="Quiz">
                    {quizStarted ? (currentQuestionIndex < questions.length ? this.showQuestion() : this.showScore()) : (
                        <button id="start-btn" onClick={this.startQuiz} style={styles.startBtn}>
                            Start Quiz
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default QuizApp;
