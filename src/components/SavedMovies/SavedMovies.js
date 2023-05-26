import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList />
        <button className='movies__button' type='button'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
