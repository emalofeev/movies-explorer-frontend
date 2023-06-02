import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies({ movies }) {
  const moviesElements = movies.map((movie) => {
    console.log(movie);
    return (
      <MoviesCard
        key={movie.id}
        movie={movie}
        movieName={movie.nameRU}
        movieImage={`https://api.nomoreparties.co/${movie.image.url}`}
        movieTime={movie.duration}
      />
    );
  });

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList moviesElements={moviesElements} />
        <button className='movies__button' type='button'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
