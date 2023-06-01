import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
import {
  LOGIN_USER_UNAUTHORIZED,
  LOGIN_USER_BAD_REQUEST,
  SERVER_ERROR,
} from '../../utils/constans';

function Login({ handleLogin, errorStatus }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const errorLogin =
    errorStatus === 'Ошибка: 400'
      ? LOGIN_USER_BAD_REQUEST
      : errorStatus === 'Ошибка: 401'
      ? LOGIN_USER_UNAUTHORIZED
      : errorStatus === 'Ошибка: 500'
      ? SERVER_ERROR
      : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    handleLogin({
      email: values.email,
      password: values.password,
    });
    resetForm();
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/' className='login__link'>
          <img className='login__logo' alt='Лого' src={logo} />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__input'>
            <label className='login__label'>E-mail</label>
            <input
              className={`login__input-text ${
                errors.email && 'login__input-text_error'
              }`}
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span className='login__text-error'>{errors.email}</span>
          </div>
          <div className='login__input'>
            <label className='login__label'>Пароль</label>
            <input
              className={`login__input-text ${
                errors.password && 'login__input-text_error'
              }`}
              id='password'
              name='password'
              type='password'
              placeholder='Пароль'
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <span className='login__text-error'>{errors.password}</span>
          </div>
          <button
            type='submit'
            className={`login__button ${isValid && 'login__button_active'}`}
            disabled={!isValid}
          >
            Войти
          </button>
          <span className='login__text-error'>{errorLogin}</span>
        </form>
        <p className='login__question'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='login__question-link'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
