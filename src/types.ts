type ratingIncrease = Record<string, number>;

export interface Answer {
  id?: number;
  copy: string;
  nextQuestion: number | null;
  ratingIncrease: ratingIncrease;
}

export type UpdateRatingsFunction = (ratingIncrease: ratingIncrease) => void;

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

export interface QuizContextValue {
  questions: Question[];
  shoes: Shoe[];
  currentQuestionId: number;
  currentQuestion: Question | undefined;
  setInitialData: (questions: Question[], shoes: Shoe[]) => void;
  updateRatings: UpdateRatingsFunction;
  nextQuestion: (questionId: number) => void;
}
