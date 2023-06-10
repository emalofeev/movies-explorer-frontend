import React from 'react';
import { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as mainApi from '../../utils/MainApi';
import { DURATION_SHORT_MOVIES } from '../../utils/constans';

function SavedMovies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(null);
  const [dataSavedMovies, setDataSavedMovies] = useState([]);

  function handleSearch(valueRequest) {
    handleFilterMovies(initialMovies, valueRequest, isShortMovies);
  }

  function handleFilterMovies(movies, valueRequest, shortMovies) {
    const dataMovies = filterMovies(movies, valueRequest, shortMovies);
    if (dataMovies.length > 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }
    setFilteredMovies(dataMovies);
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
    if (!isShortMovies) {
      console.log(true)
      setIsShortMovies(true);
      setFilteredMovies(filterShortMovies(filteredMovies));
    } else {
      console.log(false)
      setIsShortMovies(false);
      setFilteredMovies(filteredMovies);
    }
  }

  function filterShortMovies(movies) {
    return movies.filter(({ duration }) => duration < DURATION_SHORT_MOVIES);
  }

  useEffect(() => {
    mainApi
      .getMoviesLiked()
      .then((res) => {
        setDataSavedMovies(res);
      })
      .catch((err) => console.log(err));
  }, [setDataSavedMovies]);

  useEffect(() => {
    setInitialMovies(dataSavedMovies);
    if (isShortMovies) {
      setFilteredMovies(filterShortMovies(dataSavedMovies));
    } else {
      setFilteredMovies(dataSavedMovies);
    }
  }, [setInitialMovies, dataSavedMovies, isShortMovies]);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='saved-movies'>
        <SearchForm
          isSavedMovies={true}
          handleSearch={handleSearch}
          isShortMovies={isShortMovies}
          handleShortMovies={handleShortMovies}
        />
        <MoviesCardList
          isSavedMovies={true}
          dataMovies={filteredMovies}
          isMoviesNotFound={isMoviesNotFound}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
