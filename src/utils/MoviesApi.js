export const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies/';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
  return fetch(`${baseUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
