type RatingIncrease = Record<string, number>;

export interface Answer {
  id?: number;
  copy: string;
  nextQuestion: number | null;
  ratingIncrease: RatingIncrease;
}

declare function setInitialData(questions: Question[], shoes: Shoe[]): void;

declare function updateRatings(ratingIncrease: RatingIncrease): void;

declare function nextQuestion(questionId: Question['id']): void;

export interface Question {
  id: number;
  copy: string;
  answers: Answer[];
}

export interface Shoe {
  id: string;
  name: string;
  description: string;
  price: string;
  model: string;
  rating: number;
}

declare interface QuizContextValue {
  questions: Question[];
  shoes: Shoe[];
  currentQuestionId: number;
  currentQuestion: Question | undefined;
  setInitialData: setInitialData;
  updateRatings: updateRatings;
  nextQuestion: nextQuestion;
}
