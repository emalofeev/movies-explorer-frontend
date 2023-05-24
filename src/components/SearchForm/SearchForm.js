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
    </section>
  );
}

export default SearchForm;
