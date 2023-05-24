import './NavTab.css';

function NavTab() {
  return (
    <div className='navtab'>
      <a href="#about-project" className='navtab__link'>
        <p className='navtab__link-text'>О проекте</p>
      </a>
      <a href="#techs" className='navtab__link'>
        <p className='navtab__link-text'>Технологии</p>
      </a>
      <a href="#about-me" className='navtab__link'>
        <p className='navtab__link-text'>Студент</p>
      </a>
    </div>
  );
}

export default NavTab;
