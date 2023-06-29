import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__container-text'>
          <p className='about-me__container-name'>Евгений</p>
          <p className='about-me__container-about'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__container-history'>
            Я родился и живу в Санкт-Петербурге. Сегодня я работаю в крупной
            компании, которая занимается реализацией нефтепродуктов. Оказываю
            поддержку командам разработки логистических информационных систем и
            мобильных приложений. Я хочу сделать сферу цифровых продуктов, в
            которой работаю более 8 лет, лучше, прогрессивней и полезней.
          </p>
          <a
            className='about-me__container-link'
            href='https://github.com/emalofeev'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img src={photo} alt='Фото' className='about-me__photo' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
