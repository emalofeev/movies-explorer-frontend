import React from 'react';
import { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { DURATION_SHORT_MOVIES } from '../../utils/constans';

function Movies() {
  const [isGetMovies, setIsGetMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(null);
  const [isMoviesError, setIsMoviesError] = useState('');

  function handleSearch(valueRequest) {
    localStorage.setItem(`valueRequest`, valueRequest);
    localStorage.setItem(`stateCheckShortMovies`, isShortMovies);
    if (isGetMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setIsGetMovies(movies);
          handleFilterMovies(movies, valueRequest, isShortMovies);
        })
        .catch(() => setIsMoviesError(true))
        .finally(() => setIsLoading(false));
    } else {
      handleFilterMovies(isGetMovies, valueRequest, isShortMovies);
    }
  }

  function handleFilterMovies(movies, valueRequest, shortMovies) {
    const dataMovies = filterMovies(movies, valueRequest, shortMovies);
    if (dataMovies.length > 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }
    setInitialMovies(dataMovies);
    setFilteredMovies(dataMovies);
    localStorage.setItem(`movies`, JSON.stringify(dataMovies));
  }

  function filterMovies(movies, valueRequest, shortMovies) {
    return movies.filter(({ nameRU, nameEN, duration }) => {
      const movieRu = nameRU.toLowerCase();
      const movieEn = nameEN.toLowerCase();
      const userMovie = valueRequest.toLowerCase();
      const checkShortMovies = shortMovies
        ? duration <= DURATION_SHORT_MOVIES
        : true;
      return (
        checkShortMovies &&
        (movieRu.includes(userMovie) || movieEn.includes(userMovie))
      );
    });
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`stateCheckShortMovies`, !isShortMovies);
  }

  function filterShortMovies(movies) {
    return movies.filter(({ duration }) => duration < DURATION_SHORT_MOVIES);
  }

  useEffect(() => {
    if (localStorage.getItem(`movies`)) {
      const movies = JSON.parse(localStorage.getItem(`movies`));
      setInitialMovies(movies);
      if (localStorage.getItem(`stateCheckShortMovies`) === 'true') {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem(`stateCheckShortMovies`) === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm
          handleSearch={handleSearch}
          isShortMovies={isShortMovies}
          handleShortMovies={handleShortMovies}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            dataMovies={filteredMovies}
            isMoviesNotFound={isMoviesNotFound}
            isMoviesError={isMoviesError}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
