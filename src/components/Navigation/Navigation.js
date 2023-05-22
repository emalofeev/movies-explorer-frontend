import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
      <div className='navigation'>
      <Link to='/api/signup' className='navigation__link_register'>
        Регистрация
      </Link>
      <Link to='/api/signin' className='navigation__link_login'>
        <p className='navigation__link_login-text'>Войти</p>
      </Link>
      </div>
  );
}

export default Navigation;