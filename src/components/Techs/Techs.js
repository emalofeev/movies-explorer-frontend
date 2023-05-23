import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__info'>
        <div className='techs__info-container'>
          <h3 className='techs__info-title'>7 технологий</h3>
          <p className='techs__info-subtitle'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className='techs__info-lists'>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>HTML</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>CSS</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>JS</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>React</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>Git</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>Express.js</p>
          </li>
          <li className='techs-info__list'>
            <p className='techs-info__list-text'>mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
