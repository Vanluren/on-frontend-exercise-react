import { useNavigate } from 'react-router-dom';
import './HomeScreen.scss';

const HomeScreen = () => {
  const navigate = useNavigate();

  function startQuiz() {
    navigate('/quiz');
  }

  return (
    <div className="page home">
      <h1>Take the quiz and try your first pair!</h1>{' '}
      <button className="startButton primary" onClick={startQuiz}>
        Start quiz
      </button>
      <small className="footnote">30 days risk free</small>
    </div>
  );
};

export default HomeScreen;
