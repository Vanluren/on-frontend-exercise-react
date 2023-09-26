import { Question, QuizContextValue, Shoe } from '@/types';
import React, { FunctionComponent, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import questionData from '@/assets/questions.json';
import shoesData from '@/assets/shoes.json';

const QuizContext = React.createContext<QuizContextValue | null>(null);

export const QuizProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const currentQuestion = useMemo(
    () => questions.find((question) => question.id === currentQuestionId),
    [questions, currentQuestionId],
  );

  function setInitialData(questionsData: Question[], shoesData: Shoe[]) {
    setQuestions(questionsData);
    setShoes(shoesData);
  }

  function updateRatings(ratingIncrease: Record<string, number>) {
    for (const shoe of shoes) {
      if (ratingIncrease[shoe.id]) {
        shoe.rating += ratingIncrease[shoe.id];
      }
    }
  }

  function nextQuestion(questionId: number) {
    setCurrentQuestionId(questionId);
  }

  useEffect(() => {
    setInitialData(questionData, shoesData);
  });

  const contextValue = {
    questions,
    shoes,
    currentQuestionId,
    currentQuestion,
    setInitialData,
    updateRatings,
    nextQuestion,
  };

  return <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>;
};

export const useQuizContext = (): QuizContextValue => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizStore must be used within a QuizProvider');
  }
  return context;
};
