import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__info-stage'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__info-time'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__diagram'>
        <div className='about-project__diagram-back'>
          <div className='about-project__diagram-backcolor'>
            <p className='about-project__diagram-backtext'>1 неделя</p>
          </div>
          <p className='about-project__diagram-name'>Back-end</p>
        </div>
        <div className='about-project__diagram-front'>
          <div className='about-project__diagram-frontcolor'>
            <p className='about-project__diagram-fronttext'>4 недели</p>
          </div>
          <p className='about-project__diagram-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
