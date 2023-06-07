import './SearchForm.css';
import icon from '../../images/icon.svg';
import find from '../../images/find.svg';
import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
import { SEARCH_FORM_INPUT_TEXT } from '../../utils/constans';

function SearchForm({ handleSearch, isShortMovies, handleShortMovies }) {
  const { values, handleChange, isValid } = useFormWithValidation();
  const [errorSearch, setErrorSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setErrorSearch('');
    if (!values.name) {
      setErrorSearch(SEARCH_FORM_INPUT_TEXT);
    } else handleSearch(values.name);
  }

  useEffect(() => {
    values.name = localStorage.getItem('valueRequest');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <img
          className='search-form__icon'
          src={icon}
          alt='Изображение иконки поиска'
        />
        <input
          className='search-form__input'
          id='name'
          name='name'
          type='text'
          placeholder='Фильм'
          value={values.name || ''}
          onChange={handleChange}
        />
        <button className='search-form__button' type='submit'>
          <img
            className='search-form__find'
            src={find}
            alt='Кнопка поиска'
            disabled={!isValid}
          />
        </button>
      </form>
      <div className='search-form__short'>
        <label className='search-form__switch'>
          <input
            type='checkbox'
            onChange={handleShortMovies}
            checked={isShortMovies ? true : false}
          />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__short-film'>Короткометражки</p>
      </div>
      <span className='search-form__error'>{errorSearch}</span>
    </section>
  );
}

export default SearchForm;
