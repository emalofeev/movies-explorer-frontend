import './NavTab.css';

function NavTab() {
  return (
    <div className='navtab'>
      <a href="#aboutproject" className='navtab__link'>
        <p className='navtab__link-text'>О проекте</p>
      </a>
      <a href="#techs" className='navtab__link'>
        <p className='navtab__link-text'>Технологии</p>
      </a>
      <a href="#aboutme" className='navtab__link'>
        <p className='navtab__link-text'>Студент</p>
      </a>
    </div>
  );
}

export default NavTab;
