/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMilestones } from '../api/milestoneData';
import { useAuth } from '../utils/context/authContext';
import MilestoneCard from '../components/cards/MilestoneCard';

function ShowMilestones() {
  const [milestones, setMilestones] = useState([]);

  const { user } = useAuth();

  const getAllTheMilestones = () => {
    getMilestones(user.uid).then(setMilestones);
  };

  useEffect(() => {
    getAllTheMilestones();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/milestone/new" passHref>
        <Button>Add A Milestone</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {milestones.map((milestone) => (
          <MilestoneCard key={milestone.firebaseKey} milestoneObj={milestone} onUpdate={getAllTheMilestones} />
        ))}
      </div>
    </div>
  );
}

export default ShowMilestones;
