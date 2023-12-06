import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import SuggestedCard from '../components/cards/SuggestedCard';
import { getSuggested } from '../api/suggestedData';
import SuggestedSearchBar from '../components/searchbars/SuggestedSearchBar';

function ShowSuggested() {
  const [suggested, setSuggested] = useState([]);

  const { user } = useAuth();

  const getAllTheSuggested = () => {
    getSuggested(user.uid).then(setSuggested);
  };

  useEffect(() => {
    getAllTheSuggested();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <SuggestedSearchBar className="navSearch" />
        <div className="d-flex flex-wrap">
          {suggested.map((suggest) => (
            <SuggestedCard key={suggest.firebaseKey} stockObj={suggest} onUpdate={getAllTheSuggested} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSuggested;
