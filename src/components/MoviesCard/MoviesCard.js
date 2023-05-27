import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movieImage, movieName, movieTime }) {
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

  return (
    <article className='movies-card'>
      <img className='movies-card__image' alt={movieName} src={movieImage} />
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
      <p className='movie-card__time'>{movieTime}</p>
    </article>
  );
}

export default MoviesCard;
