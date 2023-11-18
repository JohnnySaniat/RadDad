/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMoment } from '../../api/momentData';

function MomentCard({ momentObj, onUpdate }) {
  const deleteThisMoment = () => {
    if (window.confirm(`Delete ${momentObj.name}?`)) {
      deleteMoment(momentObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={momentObj.image} alt={momentObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{momentObj.category}</Card.Title>
        <Card.Text>{momentObj.name}</Card.Text>
        <Card.Text>{momentObj.description}</Card.Text>
        <Card.Text>Week: {momentObj.week}</Card.Text>
        <Link href={`/moment/${momentObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/moment/edit/${momentObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisMoment} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MomentCard.propTypes = {
  momentObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    week: PropTypes.string,
    firebaseKey: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    milestone_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MomentCard;
