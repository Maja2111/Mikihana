//Entwicklerimporte
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//Stylingsimporte
import '@/index.scss';

//Pageimporte
import Login from '@pages/01_Login.jsx';
import Registration from '@pages/02_Registration';
import Impressum from '@pages/06_Impressum';

//Routerimporte
import HomeRouter from '@/Router/HomeRouter';
import ProfileRouter from '@/Router/ProfileRouter';
import AllSearchRouter from '@/Router/AllSearchRouter';

// Private Route Komponente
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für den Login-Status

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} element={<Login />} />
        <PrivateRoute
          path="/register"
          component={Registration}
          isLoggedIn={isLoggedIn}
          element={<Registration />}
        />
        <PrivateRoute
          path="/impressum"
          component={Impressum}
          isLoggedIn={isLoggedIn}
          element={<Impressum />}
        />
        <PrivateRoute
          path="/home/*"
          component={HomeRouter}
          isLoggedIn={isLoggedIn}
          element={<HomeRouter />}
        />
        <PrivateRoute
          path="/profile/*"
          component={ProfileRouter}
          isLoggedIn={isLoggedIn}
          element={<ProfileRouter />}
        />
        <PrivateRoute
          path="/search/*"
          component={AllSearchRouter}
          isLoggedIn={isLoggedIn}
          element={<AllSearchRouter />}
        />
      </Switch>
    </Router>
  );
};

export default App;
