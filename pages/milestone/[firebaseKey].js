import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MomentCard from '../../components/cards/MomentCard';
import { getMilestoneDetails } from '../../api/mergedData';

export default function ViewMilestone() {
  const [milestoneDetails, setMilestoneDetails] = useState({});

  // TODO: Call Router Hook
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const getMDetails = () => {
    getMilestoneDetails(firebaseKey).then(setMilestoneDetails);
  };

  useEffect(() => {
    getMDetails();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {milestoneDetails.moments?.map((moment) => (
            <MomentCard key={moment.firebaseKey} momentObj={moment} onUpdate={getMDetails} />
          ))}
        </div>
      </div>

    </>
  );
}
