import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__lists'>
        <li className='portfolio__list'>
          <a
            className='portfolio__list-link'
            href='https://github.com/emalofeev/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          <a
            className='portfolio__list-arrow'
            href='https://github.com/emalofeev/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__list-link'
            href='https://github.com/emalofeev/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <a
            className='portfolio__list-arrow'
            href='https://github.com/emalofeev/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__list-link'
            href='https://github.com/emalofeev/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <a
            className='portfolio__list-arrow'
            href='https://github.com/emalofeev/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
