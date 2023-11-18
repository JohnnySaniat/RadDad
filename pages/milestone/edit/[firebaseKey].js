import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMilestone } from '../../../api/milestoneData';
import MilestoneForm from '../../../components/forms/MilestoneForm';

function EditMilestone() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMilestone(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<MilestoneForm obj={editItem} />);
}

export default EditMilestone;
