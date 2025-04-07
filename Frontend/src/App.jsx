import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

//Stylingsimporte
import '@/index.scss';

import { LoginContext } from '@context/isLoggedIn.jsx';
import { LoginProvider } from '@context/isLoggedIn.jsx';
import { NavProvider } from '@context/navContext.jsx';
import { ColorProvider } from '@context/ColorContext'; // Importing ColorProvider

//Pageimporte
import Login from '@pages/01_Login.jsx';
import Registration from '@pages/02_Registration';
import Impressum from '@pages/06_Impressum';

//Routerimporte
import HomeRouter from './Router/HomeRouter';
import ProfileRouter from './Router/ProfileRouter';
import AllSearchRouter from './Router/AllSearchRouter';

// Private Route Komponente
const PrivateLayout = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(LoginContext);
  return <> {isLoggedIn ? element : <Navigate to="/" />} </>;
};

const App = () => {
  return (
    <LoginProvider>
      <NavProvider>
        <ColorProvider>
          {' '}
          {/* Wrapping Router with ColorProvider */}
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route
                path="/home/*"
                element={<PrivateLayout element={<HomeRouter />} />}
              />
              <Route
                path="/profile/*"
                element={<PrivateLayout element={<ProfileRouter />} />}
              />
              <Route
                path="/allsearch/*"
                element={<PrivateLayout element={<AllSearchRouter />} />}
              />
            </Routes>
          </Router>
        </ColorProvider>
      </NavProvider>
    </LoginProvider>
  );
};

export default App;
