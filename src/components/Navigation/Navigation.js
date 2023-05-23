import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/api/signup' className='navigation__link-register'>
        Регистрация
      </Link>
      <Link to='/api/signin' className='navigation__link-login'>
        <p className='navigation__link-text'>Войти</p>
      </Link>
    </div>
  );
}

export default Navigation;
