/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMomentDetails } from '../../api/mergedData';

export default function ViewMoment() {
  const [momentObj, setMomentDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getMomentDetails(firebaseKey).then(setMomentDetails);
  }, [firebaseKey]);

  const handleButtonClick = () => {
    router.push('/moments');
  };

  return (
    <>
      <div className="center-moment">
        <div className="text-center my-4">
          <div className="d-flex flex-wrap">
            <Card className="complete-moment-card" style={{ width: '22rem', margin: '20px' }}>
              <Card.Img variant="top" src={momentObj.image} alt={momentObj.name} style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title className="card-title">{momentObj.category}</Card.Title>
                <Card.Text>{momentObj.name}</Card.Text>
                <Card.Text>{momentObj.description}</Card.Text>
                <Button className="card-button" variant="secondary" id="back-button" onClick={handleButtonClick}>Back</Button>
                <Link href={`/moment/edit/${momentObj.firebaseKey}`} passHref>
                  <Button className="card-button" variant="secondary" id="edit-button">EDIT</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
