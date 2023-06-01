import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleSignOut, onUpdateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      email: email,
      name: name,
    });
    console.log({
      email: email,
      name: name,
    })
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='profile'>
        <form className='profile__form' onSubmit={handleSubmit}>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <div className='profile__name'>
            <p className='profile__text'>Имя</p>
            <input
              className='profile__text'
              name='profile-name'
              type='text'
              placeholder='Имя'
              value={name || ""}
              onChange={handleChangeName}
              required
            ></input>
          </div>
          <div className='profile__email'>
            <p className='profile__text'>E-mail</p>
            <input
              className='profile__text'
              name='profile-email'
              type='email'
              placeholder='Email'
              value={email || ""}
              onChange={handleChangeEmail}
              required
            ></input>
          </div>
          <button
            className='profile__menu'
            type='submit'
            aria-label='Редактировать профиль'
          >
            Редактировать
          </button>
          <button
            className='profile__menu profile__menu_exit'
            type='button'
            aria-label='Выйти из аккаунта'
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
