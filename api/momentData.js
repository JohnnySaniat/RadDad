import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMoments = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteMoment = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleMoment = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createMoment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMoment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getMomentsByMilestone = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/moments.json?orderBy="milestone_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getMoments,
  createMoment,
  deleteMoment,
  getSingleMoment,
  updateMoment,
  getMomentsByMilestone,
};
