import { useState } from "react";
import { questions } from "../data/questions.js";

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
      setResult(sorted[0][0]); // Useiten vastatun tyypin mukaan
    }
  };

  return (
    <div>
      {!result ? (
        <>
          <h2>
            {questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].answers.map((a, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(a.type)}
            >
              {a.text}
            </button>
          ))}
        </>
      ) : (
        <div>
          <h2>Olet {result}!</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;