import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMilestones = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createMilestone = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones.json`, {
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

const getSingleMilestone = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleMilestone = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMilestone = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones/${payload.firebaseKey}.json`, {
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

const getMilestoneMoments = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/milestones.json?orderBy="team_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getMilestones,
  createMilestone,
  getSingleMilestone,
  deleteSingleMilestone,
  updateMilestone,
  getMilestoneMoments,
};
