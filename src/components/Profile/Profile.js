import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <div className='profile__name'>
          <p className='profile__text'>Имя</p>
          <p className='profile__text'>Виталий</p>
        </div>
        <div className='profile__email'>
          <p className='profile__text'>E-mail</p>
          <p className='profile__text'>pochta@yandex.ru</p>
        </div>
        <button
          className='profile__menu'
          type='button'
          aria-label='Редактировать профиль'
        >
          Редактировать
        </button>
        <button
          className='profile__menu profile__menu_exit'
          type='button'
          aria-label='Выйти из аккаунта'
        >
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
