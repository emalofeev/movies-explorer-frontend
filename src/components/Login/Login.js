import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/' className='login__link'>
          <img className='login__logo' alt='Лого' src={logo} />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <div className='login__input'>
            <label className='login__label'>E-mail</label>
            <input
              className='login__input-text'
              name='email'
              type='email'
              placeholder='Email'
              value='pochta@yandex.ru'
              required
            />
          </div>
          <div className='login__input'>
            <label className='login__label'>Пароль</label>
            <input
              className='login__input-text login__input-text_error'
              name='password'
              type='password'
              placeholder='Пароль'
              required
            />
          </div>
          <button type='submit' className='login__button'>
            Войти
          </button>
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
