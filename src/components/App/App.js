import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  const [isErrorProfile, setIsErrorProfile] = useState(false);
  const navigate = useNavigate();

  function handleRegister({ email, password, name }) {
    return mainApi
      .register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
        setErrorStatus('');
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err);
      });
  }

  function handleLogin({ email, password }) {
    return mainApi
      .login({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setErrorStatus('');
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err);
      });
  }

  function handleUpdateUser({ email, name }) {
    mainApi
      .editProfile({ email, name })
      .then((res) => {
        setIsErrorProfile(false);
        setCurrentUser(res);
        setErrorStatus('200');
      })
      .catch((err) => {
        setIsErrorProfile(false);
        setErrorStatus(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsErrorProfile(true);
        }, 2000);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('valueRequest');
    localStorage.removeItem('stateCheckShortMovies');
    setLoggedIn(false);
    navigate('/');
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route
          path='/movies'
          element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
        />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />}
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
              handleUpdateUser={handleUpdateUser}
              errorStatus={errorStatus}
              isErrorProfile={isErrorProfile}
            />
          }
        />
        <Route
          path='/signup'
          element={
            <Register
              handleRegister={handleRegister}
              errorStatus={errorStatus}
            />
          }
        />
        <Route
          path='/signin'
          element={
            <Login handleLogin={handleLogin} errorStatus={errorStatus} />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
