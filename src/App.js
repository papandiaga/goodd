import React, { useState } from "react";
import image from "./naruto.jpeg";
import "./App.css";

export default function App() {
  const questions = [
    {
      questionText: "What anime series is this character from?",

      answerOptions: [
        { answerText: "Attack on Titan", isCorrect: false },
        { answerText: "Dragon Ball Z", isCorrect: false },
        { answerText: "Naruto", isCorrect: true },
        { answerText: "Bleach", isCorrect: false }
      ]
    },
    {
      questionText: "What anime series is this character from?",
      answerOptions: [
        { answerText: "Black clover", isCorrect: false },
        { answerText: "Fire Force", isCorrect: true },
        { answerText: "My hero Academia", isCorrect: false },
        { answerText: "Fairy tail", isCorrect: false }
      ]
    },
    {
      questionText: "What anime series is this character from?",
      answerOptions: [
        { answerText: "One piece", isCorrect: true },
        { answerText: "Jujutsu kaisen", isCorrect: false },
        { answerText: "Steins,Gate", isCorrect: false },
        { answerText: "Cowboy Bebop", isCorrect: false }
      ]
    },
    {
      questionText: "What anime series is this character from?",
      answerOptions: [
        { answerText: "Assasination Classroom", isCorrect: false },
        { answerText: "HxH", isCorrect: false },
        { answerText: "The Seven Deadly Sins", isCorrect: true },
        { answerText: "Tokyo Ravens", isCorrect: false }
      ]
    },
    {
      questionText: "What anime series is this character from?",
      answerOptions: [
        { answerText: "Tokyo Revengers", isCorrect: false },
        { answerText: "Tokyo Ghoul", isCorrect: false },
        { answerText: "One punch Man", isCorrect: false },
        { answerText: "Fate Zero", isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <img src={image} />
    </div>
  );
}
