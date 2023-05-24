import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
