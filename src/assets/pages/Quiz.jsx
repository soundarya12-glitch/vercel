import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Brain, Globe, BookOpen, Zap, Wind, Microscope } from "lucide-react";
import React from 'react'
export default function Cart() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // clicked title

  // helper: to check if selected
  const isSelected = (name) => title === name;

  // map titles to quiz routes
  const quizRoutes = {
    Spiritual: "/Quizes",
    Geography: "/Geo",
    Academic: "/academic",
    Friction: "/friction",
    "Non-Friction": "/non-friction",
    Science: "/science",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        
        {/* X Close Button */}
        <button
          onClick={() => {
            setTitle(""); // reset when closing
            navigate(-1);
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* QUIZ heading with clicked title beside it */}
        <h2 className="text-3xl font-bold mb-7 text-center text-indigo-700 flex justify-center items-center gap-3">
          QUIZ 
          {title && (
            <span className="text-3xl text-indigo-700 font-semibold">
              ({title})
            </span>
          )}
        </h2>

        {/* Icons Row */}
        <div className="flex justify-between gap-4 text-center">
          <div
            onClick={() => setTitle("Spiritual")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Spiritual") ? "border-2 border-indigo-500 bg-indigo-50" : "border border-transparent"}`}
          >
            <BookOpen size={40} className="text-indigo-500" />
            <p className="mt-1 text-lg">Spiritual</p>
          </div>

          <div
            onClick={() => setTitle("Geography")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Geography") ? "border-2 border-green-500 bg-green-50" : "border border-transparent"}`}
          >
            <Globe size={40} className="text-green-500" />
            <p className="mt-1 text-lg">Geography</p>
          </div>

          <div
            onClick={() => setTitle("Academic")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Academic") ? "border-2 border-pink-500 bg-pink-50" : "border border-transparent"}`}
          >
            <Brain size={40} className="text-pink-500" />
            <p className="mt-1 text-lg">Academic</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-between gap-4 mt-7 text-center">
          <div
            onClick={() => setTitle("Friction")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Friction") ? "border-2 border-indigo-500 bg-indigo-50" : "border border-transparent"}`}
          >
            <Zap size={40} className="text-indigo-500" />
            <p className="mt-1 text-lg">Friction</p>
          </div>

          <div
            onClick={() => setTitle("Non-Friction")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Non-Friction") ? "border-2 border-green-500 bg-green-50" : "border border-transparent"}`}
          >
            <Wind size={40} className="text-green-500" />
            <p className="mt-1 text-lg">Non-Friction</p>
          </div>

          <div
            onClick={() => setTitle("Science")}
            className={`flex flex-col items-center cursor-pointer p-3 rounded-lg 
              ${isSelected("Science") ? "border-2 border-pink-500 bg-pink-50" : "border border-transparent"}`}
          >
            <Microscope size={40} className="text-pink-500" />
            <p className="mt-1 text-lg">Science</p>
          </div>
        </div>

        {/* Start Quiz Button */}
        <div className="flex items-center justify-center">
          {title ? (
            <Link to={quizRoutes[title]}>
              <button className="px-7 py-3 mt-5 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Start {title} Quiz
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="px-7 py-3 mt-5 text-white bg-gray-400 rounded-lg cursor-not-allowed"
            >
              Select a Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
