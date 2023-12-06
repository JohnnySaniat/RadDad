/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import MilestoneCard from '../../components/cards/MilestoneCard';
import { searchMilestones } from '../../api/milestoneData';

export default function Search() {
  const [filteredMilestones, setFilteredMilestones] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const searchAllMilestones = () => {
    searchMilestones(searchInput, user.uid).then(setFilteredMilestones);
  };

  useEffect(() => {
    searchAllMilestones();
    return () => {
      setFilteredMilestones([]);
    };
  }, [searchInput]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {filteredMilestones.map((milestone) => <MilestoneCard key={milestone.firebaseKey} milestoneObj={milestone} onUpdate={searchAllMilestones} />)}
      </div>
    </>
  );
}
