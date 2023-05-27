import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <img className='register__logo' alt='Лого' src={logo} />
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form'>
          <div className='register__input'>
            <label className='register__label'>Имя</label>
            <input className='register__input-text' value='Виталий' required />
          </div>
          <div className='register__input'>
            <label className='register__label'>E-mail</label>
            <input
              className='register__input-text'
              value='pochta@yandex.ru'
              required
            />
          </div>
          <div className='register__input'>
            <label className='register__label'>Пароль</label>
            <input
              className='register__input-text register__input-text_error'
              value='••••••••••••••'
              required
            />
            <span className='register__text-error'>Что-то пошло не так...</span>
          </div>
          <button type='submit' className='register__button'>
            Зарегистрироваться
          </button>
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
