import React, { useContext, Suspense } from 'react';
import i18n from './i18';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from '@context/LanguageContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './index.scss';

import { LoginContext } from '@context/isLoggedIn.jsx';
import { LoginProvider } from '@context/isLoggedIn.jsx';
import { NavProvider } from '@context/navContext.jsx';
import { ColorProvider } from '@context/ColorContext';

// Page imports
import Login from '@pages/01_Login.jsx';
import Registration from '@pages/02_Registration';
import Impressum from '@pages/06_Impressum';

// Router imports
import HomeRouter from './Router/HomeRouter';
import ProfileRouter from './Router/ProfileRouter';
import AllSearchRouter from './Router/AllSearchRouter';

const PrivateLayout = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(LoginContext);
  return <> {isLoggedIn ? element : <Navigate to="/" />} </>;
};

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LoginProvider>
        <NavProvider>
          <ColorProvider>
            <LanguageProvider>
              <Suspense fallback={<div>Loading app...</div>}>
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
              </Suspense>
            </LanguageProvider>
          </ColorProvider>
        </NavProvider>
      </LoginProvider>
    </I18nextProvider>
  );
};

export default App;
