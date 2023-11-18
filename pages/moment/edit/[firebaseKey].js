import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMoment } from '../../../api/momentData';
import MomentForm from '../../../components/forms/MomentForm';

function EditMoment() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMoment(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<MomentForm obj={editItem} />);
}

export default EditMoment;
