import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
import {
  CREATE_USER_BAD_REQUEST,
  CREATE_USER_CONF_REQUEST,
  SERVER_ERROR,
} from '../../utils/constans';

function Register({ handleRegister, errorStatus }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const errorRegister =
    errorStatus === 'Ошибка: 400'
      ? CREATE_USER_BAD_REQUEST
      : errorStatus === 'Ошибка: 409'
      ? CREATE_USER_CONF_REQUEST
      : errorStatus === 'Ошибка: 500'
      ? SERVER_ERROR
      : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({
      email: values.email,
      password: values.password,
      name: values.name,
    });
    resetForm();
  };

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/' className='register__link'>
          <img className='register__logo' alt='Лого' src={logo} />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <div className='register__input'>
            <label className='register__label'>Имя</label>
            <input
              className={`register__input-text ${
                errors.name && 'register__input-text_error'
              }`}
              id='name'
              name='name'
              type='text'
              minLength='2'
              maxLength='30'
              pattern={'^[а-яА-ЯёЁa-zA-Z0-9]+$'}
              placeholder='Имя'
              value={values.name || ''}
              onChange={handleChange}
              required
            />
            <span className='register__text-error'>{errors.name}</span>
          </div>
          <div className='register__input'>
            <label className='register__label'>E-mail</label>
            <input
              className={`register__input-text ${
                errors.email && 'register__input-text_error'
              }`}
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span className='register__text-error'>{errors.email}</span>
          </div>
          <div className='register__input'>
            <label className='register__label'>Пароль</label>
            <input
              className={`register__input-text ${
                errors.password && 'register__input-text_error'
              }`}
              id='password'
              name='password'
              type='password'
              placeholder='Пароль'
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <span className='register__text-error'>{errors.password}</span>
          </div>
          <button
            type='submit'
            className={`register__button ${
              isValid && 'register__button_active'
            }`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <span className='register__text-error'>{errorRegister}</span>
        </form>
        <p className='register__question'>
          Уже зарегистрированы?
          <Link to='/signin' className='register__question-link'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
