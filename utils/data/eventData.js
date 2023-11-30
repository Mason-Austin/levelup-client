import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`)
    .then((response) => response.json())
    .then(resolve)
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

// eslint-disable-next-line import/prefer-default-export
export { getEvents, createEvent, updateEvent };
