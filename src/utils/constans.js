const CREATE_USER_BAD_REQUEST = 'Переданы некорректные данные при создании пользователя';
const CREATE_USER_CONF_REQUEST = 'При регистрации указан email, который уже существует на сервере';
const LOGIN_USER_UNAUTHORIZED = 'Введен неверный логин или пароль';
const LOGIN_USER_BAD_REQUEST = 'Переданы некорректные данные пользователя';
const SERVER_ERROR = 'Сервер сейчас упадёт';

module.exports = {
    CREATE_USER_BAD_REQUEST,
    CREATE_USER_CONF_REQUEST,
    LOGIN_USER_UNAUTHORIZED,
    LOGIN_USER_BAD_REQUEST,
    SERVER_ERROR
  };