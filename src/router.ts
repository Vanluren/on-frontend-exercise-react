import {
  createBrowserRouter,
} from "react-router-dom";
import HomeScreen from './components/HomeScreen';

const routes = [
  { path: '/', component: HomeScreen },
];

const router = createBrowserRouter(
  routes,
);

export default router;
