import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSuggested } from '../../../api/suggestedData';
import MomentForm from '../../../components/forms/MomentForm';

function EditSuggested() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSuggested(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<MomentForm obj={editItem} />);
}

export default EditSuggested;
