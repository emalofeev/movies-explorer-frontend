import './Navigation.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation({ isLoggedIn }) {
  const [isBurger, setIsBurger] = useState(false);
  const location = useLocation().pathname;
  const isMovies = location === '/movies';

  const handleBurger = () => {
    if (isBurger) {
      setIsBurger(false);
    } else {
      setIsBurger(true);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className='navigation__main'>
          <Link to='/signup' className='navigation__link-register'>
            Регистрация
          </Link>
          <Link to='/signin' className='navigation__link-login'>
            <p className='navigation__link-text'>Войти</p>
          </Link>
        </div>
      ) : (
        <>
          <button
            className={`navigation__burger-button ${
              isBurger && 'navigation__burger-button_close'
            }`}
            type='button'
            onClick={handleBurger}
          />
          <div
            className={`burger__content ${isBurger && 'burger__content_open'}`}
          >
            <nav className='burger__nav'>
              <button
                className={`navigation__burger-close ${
                  isBurger && 'burger__content_open'
                }`}
                type='button'
                onClick={handleBurger}
              />
              <Link to='/' className='navigation__link-home'>
                Главная
              </Link>
              <Link
                to='/movies'
                className={`navigation__link-films ${
                  isMovies && 'navigation__link-films_active'
                }`}
              >
                Фильмы
              </Link>
              <Link
                to='/saved-movies'
                className={`navigation__link-saved ${
                  !isMovies && 'navigation__link-saved_active'
                }`}
              >
                Сохранённые фильмы
              </Link>
              <Link to='/profile' className='navigation__link-profile'>
                <p className='navigation__link-account'>Аккаунт</p>
              </Link>
            </nav>
          </div>

          <div className='navigation__movies'>
            <Link to='/movies' className='navigation__link-films'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='navigation__link-saved'>
              Сохранённые фильмы
            </Link>
            <Link to='/profile' className='navigation__link-profile'>
              <p className='navigation__link-account'>Аккаунт</p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
