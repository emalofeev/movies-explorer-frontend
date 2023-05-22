import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <div className='navtab'>
      <Link to='/api/signin' className='navtab__link'>
        <p className='navtab__link-text'>О проекте</p>
      </Link>
      <Link to='/api/signin' className='navtab__link'>
        <p className='navtab__link-text'>Технологии</p>
      </Link>
      <Link to='/api/signin' className='navtab__link'>
        <p className='navtab__link-text'>Студент</p>
      </Link>
    </div>
  );
}

export default NavTab;
