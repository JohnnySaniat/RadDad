/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function SuggestedCard({ stockObj }) {
  return (

    <Card style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={stockObj.image} alt={stockObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{stockObj.category}</Card.Title>
        <Card.Text>{stockObj.name}</Card.Text>
        <Card.Text>{stockObj.description}</Card.Text>
        <Link href={`/suggested/edit/${stockObj.firebaseKey}`} passHref>
          <Button variant="info">Customize</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

SuggestedCard.propTypes = {
  stockObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    week: PropTypes.string,
    firebaseKey: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    milestone_id: PropTypes.string,
  }).isRequired,
};

export default SuggestedCard;
