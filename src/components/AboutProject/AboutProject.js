import './AboutProject.css';

function AboutProject() {
  return (
    <section className='aboutproject' id='aboutproject'>
      <h2 className='aboutproject__title'>О проекте</h2>
      <div className='aboutproject__info'>
        <div className='aboutproject__info-stage'>
          <h3 className='aboutproject__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutproject__info-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutproject__info-time'>
          <h3 className='aboutproject__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutproject__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutproject__diagram'>
        <div className='aboutproject__diagram-back'>
          <div className='aboutproject__diagram-backcolor'>
            <p className='aboutproject__diagram-backtext'>1 неделя</p>
          </div>
          <p className='aboutproject__diagram-name'>Back-end</p>
        </div>
        <div className='aboutproject__diagram-front'>
          <div className='aboutproject__diagram-frontcolor'>
            <p className='aboutproject__diagram-fronttext'>4 недели</p>
          </div>
          <p className='aboutproject__diagram-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
