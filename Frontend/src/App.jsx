import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

//Stylingsimporte
import '@/index.scss';

import { LoginContext } from '@components/isLoggedIn.jsx';

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
            path="/search/*"
            element={<PrivateLayout element={<AllSearchRouter />} />}
          />
        </Routes>
      </Router>
    </LoginProvider>
  );
};

export default App;
