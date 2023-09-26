import { useQuizStore } from '@/store';
import { Answer } from '@/types';
import { useNavigate } from 'react-router-dom';
import './QuizScreen.scss';

const QuizScreen = () => {
  const navigate = useNavigate();
  const { currentQuestion, nextQuestion, updateRatings } = useQuizStore();

  function selectAnswer(answer: Answer): void {
    updateRatings(answer.ratingIncrease);

    answer.nextQuestion !== null ? nextQuestion(answer.nextQuestion) : navigate('/results');
  }

  return (
    <div className="page quiz">
      <h1>{currentQuestion?.copy}</h1>
      <div className="buttonContainer">
        {currentQuestion?.answers.map((answer) => (
          <button key={answer.id} className="outline" onClick={() => selectAnswer(answer)}>
            {answer.copy}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
