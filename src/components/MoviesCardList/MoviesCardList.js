import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SEARCH_FORM_NOT_FOUND, SEARCH_FORM_ERROR } from '../../utils/constans';

function MoviesCardList({
  dataMovies,
  isMoviesNotFound,
  isMoviesError,
  isSavedMovies,
}) {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [amountMoviesVisible, setAmountMoviesVisible] = useState(0);
  const [moviesVisible, setMoviesVisible] = useState({
    base: 0,
    more: 0,
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

    if (widthWindow >= 1280) {
      setMoviesVisible({
        base: 16,
        more: 4,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else if (widthWindow >= 1090) {
      setMoviesVisible({
        base: 9,
        more: 3,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else if (widthWindow >= 769) {
      setMoviesVisible({
        base: 4,
        more: 2,
      });
      setAmountMoviesVisible(moviesVisible.base);
    } else {
      setMoviesVisible({
        base: 5,
        more: 2,
      });
      setAmountMoviesVisible(moviesVisible.base);
    }
  }, [widthWindow, moviesVisible.base]);

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
