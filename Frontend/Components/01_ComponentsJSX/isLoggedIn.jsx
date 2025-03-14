import React, { useState, createContext, useContext, useEffect } from 'react';
//import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   if (Cookies.get('isLoggedIn')) setIsLoggedIn(true);
  //   if (Cookies.get('userName') && Cookies.get('userPassword')) {
  //     setUserName(Cookies.get('userName'));
  //     setUserPassword(Cookies.get('userPassword'));
  //   }
  // }, [isLoggedIn]);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName: [userName, setUserName],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export const LogoutContext = createContext();

export const LogoutContextProvider = (props) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const { login } = useContext(LoginContext);
  const [isLoggedOut, setIsLoggedOut] = login;

  const logoutHandler = async () => {
    const response = await axios.post(
      'http://localhost:4000/logout',
      {},
      { withCredentials: true }
    );
    console.log('responseInLoginContext', response);
    setIsLoggedOut(false);

    Cookies.remove('email');
    navigate('/');
  };

  return (
    <LogoutContext.Provider
      value={{
        auth: [isAuth, setIsAuth],
        logout: logoutHandler,
      }}
    >
      {props.children}
    </LogoutContext.Provider>
  );
};

export const RegisterContext = createContext();

export const RegisterContextProvider = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <RegisterContext.Provider value={[isRegistered, setIsRegistered]}>
      {props.children}
    </RegisterContext.Provider>
  );
};
