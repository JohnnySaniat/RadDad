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
    <Card style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={milestoneObj.image} alt={milestoneObj.week} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{milestoneObj.week}</Card.Title>
        <span>{milestoneObj.description}</span>
        <br />
        <Link href={`/milestone/${milestoneObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/milestone/edit/${milestoneObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteMilestone} className="m-2">
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
