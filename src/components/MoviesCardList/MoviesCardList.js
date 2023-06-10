import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  SEARCH_FORM_NOT_FOUND,
  SEARCH_FORM_ERROR,
  AMOUNT_MOVIES_BASE_0,
  AMOUNT_MOVIES_BASE_4,
  AMOUNT_MOVIES_BASE_5,
  AMOUNT_MOVIES_BASE_9,
  AMOUNT_MOVIES_BASE_16,
  AMOUNT_MOVIES_MORE_0,
  AMOUNT_MOVIES_MORE_2,
  AMOUNT_MOVIES_MORE_3,
  AMOUNT_MOVIES_MORE_4,
  WIDTH_WINDOW_769,
  WIDTH_WINDOW_1090,
  WIDTH_WINDOW_1280,
} from '../../utils/constans';

function MoviesCardList({
  dataMovies,
  isMoviesNotFound,
  isMoviesError,
  isSavedMovies,
}) {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [amountMoviesVisible, setAmountMoviesVisible] = useState(0);
  const [moviesVisible, setMoviesVisible] = useState({
    base: AMOUNT_MOVIES_BASE_0,
    more: AMOUNT_MOVIES_MORE_0,
  });

  function addMoreMovies() {
    setAmountMoviesVisible(amountMoviesVisible + moviesVisible.more);
  }

  useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidthWindow(window.innerWidth);
      }, 300);
    };

    if (widthWindow >= WIDTH_WINDOW_1280) {
      setMoviesVisible({
        base: AMOUNT_MOVIES_BASE_16,
        more: AMOUNT_MOVIES_MORE_4,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else if (widthWindow >= WIDTH_WINDOW_1090) {
      setMoviesVisible({
        base: AMOUNT_MOVIES_BASE_9,
        more: AMOUNT_MOVIES_MORE_3,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else if (widthWindow >= WIDTH_WINDOW_769) {
      setMoviesVisible({
        base: AMOUNT_MOVIES_BASE_4,
        more: AMOUNT_MOVIES_MORE_2,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else {
      setMoviesVisible({
        base: AMOUNT_MOVIES_BASE_5,
        more: AMOUNT_MOVIES_MORE_2,
      });
      setAmountMoviesVisible(moviesVisible.base);
    }
  }, [widthWindow, moviesVisible.base]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className='movies-card-list'>
      <li className='movies-card-list__items'>
        {isMoviesError ? (
          <p className='movies-card-list__error'>{SEARCH_FORM_ERROR}</p>
        ) : isSavedMovies && !isMoviesNotFound ? (
          dataMovies.map((movie) => (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              movieName={movie.nameRU}
              movieImage={movie.image}
              movieTime={movie.duration}
              movieTrailer={movie.trailerLink}
              isSavedMovies={isSavedMovies}
            />
          ))
        ) : !isMoviesNotFound ? (
          dataMovies
            .slice(0, amountMoviesVisible)
            .map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                movieName={movie.nameRU}
                movieImage={`https://api.nomoreparties.co/${movie.image.url}`}
                movieTime={movie.duration}
                movieTrailer={movie.trailerLink}
                isSavedMovies={isSavedMovies}
              />
            ))
        ) : (
          <p className='movies-card-list__not-found'>{SEARCH_FORM_NOT_FOUND}</p>
        )}
      </li>
      <button
        className={`movies-card-list__button ${
          dataMovies.length > amountMoviesVisible
            ? ''
            : 'movies-card-list__button_unvisible'
        } ${!isSavedMovies ? '' : 'movies-card-list__button_unvisible'}`}
        type='button'
        onClick={addMoreMovies}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
