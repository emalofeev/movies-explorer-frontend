import { useState, useEffect } from 'react';
import './MoviesCard.css';
import { useLocation, Link } from 'react-router-dom';
import * as mainApi from '../../utils/MainApi';

function MoviesCard({
  movieId,
  movieImage,
  movieName,
  movieTime,
  movieTrailer,
  movie,
  isSavedMovies,
}) {
  const location = useLocation().pathname;
  const isMovies = location === '/movies';
  const [isLiked, setIsLiked] = useState(false);
  const [dataSavedMovies, setDataSavedMovies] = useState([]);

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  function handleLikeClick() {
    if (!isSavedMovies && !isLiked) {
      mainApi
        .addLike(movie)
        .then(() => setIsLiked(true))
        .catch((err) => console.log(err));
    } else {
      dataSavedMovies.forEach((i) => {
        if (i.movieId === movie.id || i.movieId === movie.movieId) {
          mainApi
            .deleteLike(i)
            .then((res) => {
              setIsLiked(false);
              if (isSavedMovies) {
                document.getElementById(`${res._id}`).remove();
              }
            })
            .catch((err) => console.log(err));
        }
      });
    }
  }

  useEffect(() => {
    mainApi
      .getMoviesLiked()
      .then((res) => {
        setDataSavedMovies(res);
      })
      .catch((err) => console.log(err));
  }, [isLiked]);

  useEffect(() => {
    dataSavedMovies.filter(
      (item) => item.movieId === movie.id && setIsLiked(true)
    );
  }, [dataSavedMovies, movie]);

  return (
    <article id={movieId} className='movies-card'>
      <Link className='movies-card__link' to={movieTrailer} target='_blank'>
        <img className='movies-card__image' alt={movieName} src={movieImage} />
      </Link>
      <div className='movies-card__item'>
        <h5 className='movies-card__item-name'>{movieName}</h5>
        {isMovies ? (
          <button
            className={`movies-card__item-like ${
              isLiked && 'movies-card__item-like_active'
            }`}
            type='button'
            aria-label='Лайкнуть'
            onClick={handleLikeClick}
          ></button>
        ) : (
          <button
            className='movies-card__item-delete'
            type='button'
            aria-label='Удалить'
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <p className='movie-card__time'>{getTimeFromMins(movieTime)}</p>
    </article>
  );
}

export default MoviesCard;
