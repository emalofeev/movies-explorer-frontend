import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className='footer__container'>
        <p className='footer__container-date'>© 2023</p>
        <ul className='footer__lists'>
          <li className='footer__list'>
            <a
              className='footer__list-link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list'>
            <a
              className='footer__list-link'
              href='https://github.com/emalofeev'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
