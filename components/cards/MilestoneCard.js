/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMilestoneMomentsRelationship } from '../../api/mergedData';

function MilestoneCard({ milestoneObj, onUpdate }) {
  const deleteMilestone = () => {
    if (window.confirm(`Do you want to delete ${milestoneObj.week}?`)) {
      deleteMilestoneMomentsRelationship(milestoneObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="complete-milestone-card" style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={milestoneObj.image} alt={milestoneObj.week} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title className="card-title">{milestoneObj.week}</Card.Title>
        <span className="card-description">{milestoneObj.description}</span>
        <br />
        <Link href={`/milestone/${milestoneObj.firebaseKey}`} passHref>
          <Button className="card-button" variant="secondary">VIEW</Button>
        </Link>
        <Link href={`/milestone/edit/${milestoneObj.firebaseKey}`} passHref>
          <Button className="card-button" variant="secondary">EDIT</Button>
        </Link>
        <Button variant="secondary" onClick={deleteMilestone} className="card-button">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MilestoneCard.propTypes = {
  milestoneObj: PropTypes.shape({
    week: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MilestoneCard;
