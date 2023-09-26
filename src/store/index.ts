import { Shoe, Question } from '@/types';
import { useMemo, useState } from 'react';

export const useQuizStore = () => {
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

  return {
    questions,
    shoes,
    currentQuestionId,
    currentQuestion,
    setInitialData,
    updateRatings,
    nextQuestion,
  };
};
