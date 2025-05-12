import { useState } from "react";
import { questions } from "../data/questions.js";
import { pandaTypes } from "../data/pandaTypes.js";

function Quiz() {
  // useStates 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    if (currentQuestion + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const frequency = newAnswers.reduce((acc, t) => {
        acc[t] = (acc[t] || 0) + 1;
        return acc;
      }, {});
      const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
      setResult(sorted[0][0]); // Useiten vastatun tyypin mukaan, tasatilanteessa ensimmäinen
    }
  };

  function handleRestart() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  // Fisher-Yates shuffle, credit Wikipedia
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  // Vastausten järjestys muuttuu joka kerta – myös silloin, kun pelataan uudestaan
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return (
    <div className="quiz-container">
      {!result ? (
        <>
          <h2 className="question">
            {questions[currentQuestion].question}
          </h2>
          <div className="answer-container">
          {shuffleArray(questions[currentQuestion].answers).map((a, i) => (
            <button
              key={i}
              className="answer-button"
              onClick={() => handleAnswer(a.type)}
            >
              {a.text}
            </button>
          ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="result">Olet {result}!</h2>
            <p>{pandaTypes[result].description}</p>
            <div className="buttons">
                <button className="other-button" onClick={handleRestart}>Uudestaan!</button>
                <button className="other-button" onClick={() => window.location.href = "/"}>Etusivulle</button>
            </div>
        </div>
        
      )}
    </div>
  );
}

export default Quiz;