import Logo from '@/assets/images/logo.png';
import './DefaultLayout.scss';
import { Link, Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div id="app" className="app">
      <header className="header">
        <Link to="/">
          <img src={Logo} className="logo" alt="On logo" />
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
