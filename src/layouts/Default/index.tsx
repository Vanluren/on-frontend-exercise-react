import './DefaultLayout.scss';
import { Link, Outlet } from 'react-router-dom';

const DefaultLayout = () => (
  <div id="app" className="app">
    <header className="header">
      <Link to="/">
        <img src="/images/logo.png" className="logo" alt="On logo" />
      </Link>
    </header>
    <Outlet />
  </div>
);

export default DefaultLayout;
