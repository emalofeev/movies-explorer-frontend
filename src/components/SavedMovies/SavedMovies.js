import React from 'react';
import { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as mainApi from '../../utils/MainApi';

function SavedMovies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(null);
  const [dataSavedMovies, setDataSavedMovies] = useState([]);

  function handleSearch(valueRequest) {
    localStorage.setItem(`valueRequest`, valueRequest);
    localStorage.setItem(`stateCheckShortMovies`, isShortMovies);
    handleFilterMovies(filteredMovies, valueRequest, isShortMovies);
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
      const checkShortMovies = shortMovies ? duration <= 40 : true;
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
    return movies.filter(({ duration }) => duration < 40);
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
    if (localStorage.getItem(`stateCheckShortMovies`) === 'true') {
      setFilteredMovies(filterShortMovies(dataSavedMovies));
    } else {
      setFilteredMovies(dataSavedMovies);
    }
  }, [setInitialMovies, dataSavedMovies]);

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
