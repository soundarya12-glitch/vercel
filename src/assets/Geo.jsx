import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from 'react'
const quizData = [
  {
    question: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "North America", "Antarctica"],
    answer: "Asia",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "The river Nile flows into which sea?",
    options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Arabian Sea"],
    answer: "Mediterranean Sea",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Alps", "Rockies", "Himalayas", "Andes"],
    answer: "Himalayas",
  },
  {
    question: "Which country has the most natural lakes?",
    options: ["India", "Canada", "Brazil", "Russia"],
    answer: "Canada",
  },
];

export default function Geography() {
  const navigate=useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const next = current + 1;
      if (next < quizData.length) {
        setCurrent(next);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className=" p-2 rounded-2xl shadow-xl w-full max-w-md relative">
           <button
          onClick={() => navigate(-1)}
          className="absolute top-0 right-1 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
</div>
        {!finished ? (
          <div>
             <h1 className="text-xl font-bold mb-6 text-pink-800 text-center">
             GEOGRAPHY BOOKS
           </h1>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Q{current + 1}. {quizData[current].question}
            </h2>
            <div className="grid gap-3">
              {quizData[current].options.map((option, idx) => {
                let optionClass = "w-full p-3 rounded-xl text-gray-700 text-left transition ";
                if (selected) {
                  if (option === quizData[current].answer) {
                    optionClass += "bg-green-300";
                  } else if (option === selected) {
                    optionClass += "bg-red-300";
                  } else {
                    optionClass += "bg-blue-100";
                  }
                } else {
                  optionClass += "bg-blue-100 hover:bg-blue-200";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => !selected && handleAnswer(option)}
                    className={optionClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Finished 🌍</h2>
            <p className="text-lg text-gray-600">Your Score: {score} / {quizData.length}</p>
            <button
              className="mt-6 px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
              onClick={() => { setCurrent(0); setScore(0); setFinished(false); setSelected(null); }}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
