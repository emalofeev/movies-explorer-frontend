const CREATE_USER_BAD_REQUEST = 'Переданы некорректные данные при создании пользователя';
const CREATE_USER_CONF_REQUEST = 'При регистрации указан email, который уже существует на сервере';
const LOGIN_USER_UNAUTHORIZED = 'Введен неверный логин или пароль';
const LOGIN_USER_BAD_REQUEST = 'Переданы некорректные данные пользователя';
const UPDATE_USER_BAD_REQUEST = 'Переданы некорректные данные при обновлении данных пользователя';
const UPDATE_USER_CONF_REQUEST = 'При обновлении данных пользователя указан email, который уже существует на сервере';
const UPDATE_USER_OK = 'Данные пользователя успешно обновлены';
const SEARCH_FORM_INPUT_TEXT = 'Нужно ввести ключевое слово';
const SEARCH_FORM_NOT_FOUND = 'Ничего не найдено';
const SEARCH_FORM_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
const SERVER_ERROR = 'Сервер сейчас упадёт';

module.exports = {
    CREATE_USER_BAD_REQUEST,
    CREATE_USER_CONF_REQUEST,
    LOGIN_USER_UNAUTHORIZED,
    LOGIN_USER_BAD_REQUEST,
    UPDATE_USER_BAD_REQUEST,
    UPDATE_USER_CONF_REQUEST,
    UPDATE_USER_OK,
    SEARCH_FORM_INPUT_TEXT,
    SEARCH_FORM_NOT_FOUND,
    SEARCH_FORM_ERROR,
    SERVER_ERROR
  };