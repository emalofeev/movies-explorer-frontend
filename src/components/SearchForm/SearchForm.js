import './SearchForm.css';
import icon from '../../images/icon.svg';
import find from '../../images/find.svg';
// import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
// import {
//   CREATE_USER_BAD_REQUEST,
//   CREATE_USER_CONF_REQUEST,
//   SERVER_ERROR,
// } from '../../utils/constans';

function SearchForm({ getMovies }) {
  // const { values, handleChange, errors, isValid, resetForm } =
  //   useFormWithValidation();

  // const errorRegister =
  //   errorStatus === 'Ошибка: 400'
  //     ? CREATE_USER_BAD_REQUEST
  //     : errorStatus === 'Ошибка: 409'
  //     ? CREATE_USER_CONF_REQUEST
  //     : errorStatus === 'Ошибка: 500'
  //     ? SERVER_ERROR
  //     : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    // resetForm();
  };

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
          // value={values.name || ''}
          // onChange={handleChange}
          required
        />
        <button className='search-form__button' type='submit'>
          <img className='search-form__find' src={find} alt='Кнопка поиска' />
        </button>
      </form>
      <div className='search-form__short'>
        <label className='search-form__switch'>
          <input type='checkbox' />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__short-film'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
