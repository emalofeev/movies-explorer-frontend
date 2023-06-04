import './MoviesCard.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function MoviesCard({ movieImage, movieName, movieTime, movieTrailer }) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation().pathname;
  const isMovies = location === '/movies';

  function handleLike() {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <article className='movies-card'>
      <Link className='movies-card__link' to={movieTrailer} target='_blank'>
        <img className='movies-card__image' alt={movieName} src={movieImage} />{' '}
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
            onClick={handleLike}
          ></button>
        ) : (
          <button
            className='movies-card__item-delete'
            type='button'
            aria-label='Удалить'
          ></button>
        )}
      </div>
      <p className='movie-card__time'>{getTimeFromMins(movieTime)}</p>
    </article>
  );
}

export default MoviesCard;
