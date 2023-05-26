import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import film1 from '../../images/pic__COLOR_pic.png';
import film2 from '../../images/pic__COLOR_pic (1).png';
import film3 from '../../images/pic__COLOR_pic (2).png';
import film4 from '../../images/pic__COLOR_pic (3).png';
import film5 from '../../images/pic__COLOR_pic (4).png';
import film6 from '../../images/pic__COLOR_pic (5).png';
import film7 from '../../images/pic__COLOR_pic (6).png';
import film8 from '../../images/pic__COLOR_pic (7).png';
import film9 from '../../images/pic__COLOR_pic (8).png';
import film10 from '../../images/pic__COLOR_pic (9).png';
import film11 from '../../images/pic__COLOR_pic (10).png';
import film12 from '../../images/pic__COLOR_pic (11).png';
import film13 from '../../images/pic__COLOR_pic (12).png';
import film14 from '../../images/pic__COLOR_pic (13).png';
import film15 from '../../images/pic__COLOR_pic (14).png';
import film16 from '../../images/pic__COLOR_pic (15).png';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
        <MoviesCard movieName={'33 слова о дизайне'} movieImage={film1} movieTime={'1ч42м'}/>
        <MoviesCard movieName={'Киноальманах «100 лет дизайна»'} movieImage={film2} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'В погоне за Бенкси'} movieImage={film3} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Баския: Взрыв реальности'} movieImage={film4} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Бег это свобода'} movieImage={film5} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Книготорговцы'} movieImage={film6} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Когда я думаю о Германии ночью'} movieImage={film7} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Gimme Danger: История Игги и The Stooges'} movieImage={film8} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Дженис: Маленькая девочка грустит'} movieImage={film9} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Соберись перед прыжком'} movieImage={film10} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Пи Джей Харви: A dog called money'} movieImage={film11} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'По волнам: Искусство звука в кино'} movieImage={film12} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Рудбой'} movieImage={film13} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Скейт — кухня'} movieImage={film14} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Война искусств'} movieImage={film15} movieTime={'1ч 42м'}/>
        <MoviesCard movieName={'Зона'} movieImage={film16} movieTime={'1ч 42м'}/>
    </section>
  );
}

export default MoviesCardList;
