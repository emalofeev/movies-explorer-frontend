import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SEARCH_FORM_NOT_FOUND, SEARCH_FORM_ERROR } from '../../utils/constans';

function MoviesCardList({ dataMovies, isMoviesNotFound, isMoviesError }) {
  return (
    <section className='movies-card-list'>
      {isMoviesError ? (
        <p className='movies-card-list__error'>{SEARCH_FORM_ERROR}</p>
      ) : !isMoviesNotFound ? (
        dataMovies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            movieName={movie.nameRU}
            movieImage={`https://api.nomoreparties.co/${movie.image.url}`}
            movieTime={movie.duration}
            movieTrailer={movie.trailerLink}
          />
        ))
      ) : (
        <p className='movies-card-list__not-found'>{SEARCH_FORM_NOT_FOUND}</p>
      )}
    </section>
  );
}

export default MoviesCardList;
