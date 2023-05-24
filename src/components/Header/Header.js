import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedIn}) {
  return (
    <header className='header'>
      <img className='header__logo' alt='Лого' src={logo} />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
