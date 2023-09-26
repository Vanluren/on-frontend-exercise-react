import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from '@/components/HomeScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultsScreen from '@/components/ResultsScreen';
import DefaultLayout from '@/layouts/Default';

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'quiz',
        element: <QuizScreen />,
      },
      {
        path: 'results',
        element: <ResultsScreen />,
      },
      {
        element: <HomeScreen />,
        index: true,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
