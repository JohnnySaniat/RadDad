/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMomentDetails } from '../../api/mergedData';

export default function ViewMoment() {
  const [momentDetails, setMomentDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getMomentDetails(firebaseKey).then(setMomentDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={momentDetails.image} alt={momentDetails.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {momentDetails.name}
        </h5>
        <p>Week: {momentDetails.week}</p>
        <p>Category: {momentDetails.category}</p>
        <hr />
      </div>
    </div>
  );
}
