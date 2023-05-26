import './SearchForm.css';
import icon from '../../images/icon.svg';
import find from '../../images/find.svg';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <img
          className='search-form__icon'
          src={icon}
          alt='Изображение иконки поиска'
        />
        <input
          className='search-form__input'
          name='search-films'
          type='text'
          placeholder='Фильм'
          required
        />
        <button className='search-form__button' type='submit'>
          <img className='search-form__find' src={find} alt='Кнопка поиска' />
        </button>
      </form>
      <div className='search-form__short'>
        <label class='search-form__switch'>
          <input type='checkbox' />
          <span class='search-form__slider'></span>
        </label>
        <p className='search-form__short-film'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
