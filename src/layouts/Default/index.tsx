import Logo from '@/assets/images/logo.png';
import questions from '@/assets/questions.json';
import shoes from '@/assets/shoes.json';
import { useQuizStore } from '@/store';
import { Question, Shoe } from '@/types';
import './DefaultLayout.scss';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const { setInitialData } = useQuizStore();

  useEffect(() => {
    setInitialData(questions as Question[], shoes as Shoe[]);
  });

  return (
    <div id="app" className="app">
      <header className="header">
        <img src={Logo} className="logo" alt="On logo" />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
