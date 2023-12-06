/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { searchSuggested } from '../../api/suggestedData';
import SuggestedCard from '../../components/cards/SuggestedCard';

export default function Search() {
  const [filteredMoments, setFilteredMoments] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const searchAllSuggestedMoments = () => {
    searchSuggested(searchInput, user.uid).then(setFilteredMoments);
  };

  useEffect(() => {
    searchAllSuggestedMoments();
    return () => {
      setFilteredMoments([]);
    };
  }, [searchInput]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {filteredMoments.map((suggested) => <SuggestedCard key={suggested.firebaseKey} stockObj={suggested} onUpdate={searchAllSuggestedMoments} />)}
      </div>
    </>
  );
}
