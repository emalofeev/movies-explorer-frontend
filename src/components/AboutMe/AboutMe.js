import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className='aboutme' id='aboutme'>
      <h2 className='aboutme__title'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__container-text'>
          <p className='aboutme__container-name'>Виталий</p>
          <p className='aboutme__container-about'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='aboutme__container-history'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='aboutme__container-link'
            href='https://github.com/emalofeev'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img src={photo} alt='Фото' className='aboutme__photo' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
