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
  const navigate = useNavigate();

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
        setCurrentUser(res);
        setErrorStatus('200');
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err);
      });
  }

  function handleErrorStatus() {
    setErrorStatus('');
  };

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/');
  }

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
              handleErrorStatus={handleErrorStatus}
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
