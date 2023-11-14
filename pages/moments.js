import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMoments } from '../api/momentData';
import { useAuth } from '../utils/context/authContext';
import MomentCard from '../components/cards/MomentCard';
// import SearchBar from '../components/search/SearchBar';

function ShowMoments() {
  const [moments, setMoments] = useState([]);

  const { user } = useAuth();

  const getAllTheMoments = () => {
    getMoments(user.uid).then(setMoments);
  };

  useEffect(() => {
    getAllTheMoments();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/moment/new" passHref>
          <Button>Add A Moment</Button>
        </Link>
        <div className="d-flex flex-wrap">
          {moments.map((moment) => (
            <MomentCard key={moment.firebaseKey} momentObj={moment} onUpdate={getAllTheMoments} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowMoments;
