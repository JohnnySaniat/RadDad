import { deleteMoment, getSingleMoment } from './momentData';
import { deleteSingleMilestone, getSingleMilestone, getMilestoneMoments } from './milestoneData';

const getMomentDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMoment(firebaseKey).then((momentObj) => {
    getSingleMilestone(momentObj.milestone_id).then((milestoneObject) => {
      resolve({ ...momentObj, milestoneObject });
    });
  }).catch(reject);
});

const getMilestoneDetails = async (firebaseKey) => {
  const milestone = await getSingleMilestone(firebaseKey);
  const moments = await getMilestoneMoments(milestone.firebaseKey);

  return { ...milestone, moments };
};

const deleteMilestoneMomentsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getMilestoneMoments(firebaseKey).then((milestonesMomentArray) => {
    const deleteMomentPromises = milestonesMomentArray.map((moment) => deleteMoment(moment.firebaseKey));

    Promise.all(deleteMomentPromises).then(() => {
      deleteSingleMilestone(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getMomentDetails, getMilestoneDetails, deleteMilestoneMomentsRelationship,
};
