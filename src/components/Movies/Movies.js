import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'></main>
      <Footer />
    </>
  );
}

export default Movies;
