import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createGame = (game) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateGame = (updatedgame, gameId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${gameId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedgame),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getSingleGame = (gameId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${gameId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getGames, createGame, getGameTypes, updateGame, getSingleGame };
