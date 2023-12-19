import { clientCredentials } from '../client';

const deleteSingleEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getEvents = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const updateEvent = (updatedEvent, eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedEvent),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getSingleEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const leaveEvent = (event, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${event}/leave`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const joinEvent = (event, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${event}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export {
  getEvents, createEvent, updateEvent, getSingleEvent, deleteSingleEvent, joinEvent, leaveEvent,
};
