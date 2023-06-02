import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';
import {
  UPDATE_USER_BAD_REQUEST,
  UPDATE_USER_CONF_REQUEST,
  UPDATE_USER_OK,
  SERVER_ERROR,
} from '../../utils/constans';

function Profile({
  handleSignOut,
  handleUpdateUser,
  errorStatus,
  handleErrorStatus,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();

  const errorProfile =
    errorStatus === '200'
      ? UPDATE_USER_OK
      : errorStatus === 'Ошибка: 400'
      ? UPDATE_USER_BAD_REQUEST
      : errorStatus === 'Ошибка: 409'
      ? UPDATE_USER_CONF_REQUEST
      : errorStatus === 'Ошибка: 500'
      ? SERVER_ERROR
      : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      email: values.email,
      name: values.name,
    });
    resetForm();
  };

  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  useEffect(() => {
    handleErrorStatus('');
  }, []);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='profile'>
        <form className='profile__form' onSubmit={handleSubmit}>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <div className='profile__name'>
            <p className='profile__text'>Имя</p>
            <input
              className={`profile__text ${
                errors.name && 'profile__text_error'
              }`}
              id='profile-name'
              name='name'
              type='text'
              minLength='2'
              maxLength='30'
              pattern={'^[а-яА-ЯёЁa-zA-Z0-9]+$'}
              placeholder='Имя'
              value={values.name || ''}
              onChange={handleChange}
              required
            ></input>
          </div>
          <span className='profile__text-error'>{errors.name}</span>
          <div className='profile__email'>
            <p className='profile__text'>E-mail</p>
            <input
              className={`profile__text ${
                errors.email && 'profile__text_error'
              }`}
              id='profile-email'
              name='email'
              type='email'
              placeholder='Email'
              value={values.email || ''}
              onChange={handleChange}
              required
            ></input>
          </div>
          <span className='profile__text-error'>{errors.email}</span>
          <button
            type='submit'
            className={`profile__menu ${isValid && 'profile__menu_active'}`}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <span
            className={`profile__text-error ${
              errorStatus === '200' && 'profile__text-error_none'
            }`}
          >
            {errorProfile}
          </span>
          <button
            className='profile__menu profile__menu_exit'
            type='button'
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </main>
    </>
  );
}

export default Profile;
