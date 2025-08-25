import { create } from 'zustand';

export const useQuizStore = create((set) => ({
  questions: [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'React is a ____ library?',
      options: ['CSS', 'JavaScript', 'Python', 'HTML'],
      answer: 'JavaScript',
    },
  ],
  currentQuestion: 0,
  score: 0,
  selectAnswer: (selected) =>
    set((state) => {
      const correct = state.questions[state.currentQuestion].answer === selected;
      return {
        score: correct ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
      };
    }),
  resetQuiz: () => set({ currentQuestion: 0, score: 0 }),
}));
