import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__container-text'>
          <p className='about-me__container-name'>Виталий</p>
          <p className='about-me__container-about'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__container-history'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
