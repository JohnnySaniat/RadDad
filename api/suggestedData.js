import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSuggested = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/suggested/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteSuggested = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/suggested/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleSuggested = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/suggested/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getSuggested,
  deleteSuggested,
  getSingleSuggested,
};
