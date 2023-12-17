/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { searchMoments } from '../../api/momentData';
import MomentCard from '../../components/cards/MomentCard';

export default function Search() {
  const [filteredMoments, setFilteredMoments] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const searchAllMoments = () => {
    searchMoments(searchInput, user.uid).then(setFilteredMoments);
  };

  useEffect(() => {
    searchAllMoments();
    return () => {
      setFilteredMoments([]);
    };
  }, [searchInput]);

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {filteredMoments.map((moment) => <MomentCard key={moment.firebaseKey} momentObj={moment} onUpdate={searchAllMoments} />)}
        </div>
      </div>
    </>
  );
}
