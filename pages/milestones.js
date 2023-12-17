/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getMilestones } from '../api/milestoneData';
import { useAuth } from '../utils/context/authContext';
import MilestoneCard from '../components/cards/MilestoneCard';
import MilestoneSearchBar from '../components/searchbars/MilestoneSearchBar';

function ShowMilestones() {
  const [milestones, setMilestones] = useState([]);
  const { user } = useAuth();

  const getAllTheMilestones = () => {
    getMilestones(user.uid).then((milestonesData) => {
      const sortedMilestones = [...milestonesData].sort((a, b) => a.week - b.week);
      setMilestones(sortedMilestones);
    });
  };

  useEffect(() => {
    getAllTheMilestones();
  }, []);

  return (
    <div className="text-center my-4">
      <MilestoneSearchBar className="navSearch" />
      <div className="d-flex flex-wrap">
        {milestones.map((milestone) => (
          <MilestoneCard key={milestone.firebaseKey} milestoneObj={milestone} onUpdate={getAllTheMilestones} />
        ))}
      </div>
    </div>
  );
}

export default ShowMilestones;
