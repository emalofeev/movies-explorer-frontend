export const baseUrl = 'http://localhost:3000/api/';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const register = ({ email, name, password }) => {
  return fetch(`${baseUrl}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(checkResponse);
};

export const editProfile = ({ email, name }) => {
  const token = localStorage.getItem('jwt');
  return fetch(`${baseUrl}users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
      name: name,
    }),
  }).then(checkResponse);
};
