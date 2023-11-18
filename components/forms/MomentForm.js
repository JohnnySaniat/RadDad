/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMoment, updateMoment } from '../../api/momentData';
import { getMilestones } from '../../api/milestoneData';

const initialState = {
  name: '',
  image: '',
  category: '',
};

function MomentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [milestones, setMilestones] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getMilestones(user.uid).then(setMilestones);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMoment(formInput).then(() => router.push('/moments'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMoment(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateMoment(patchPayload).then(() => {
          router.push('/moments');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} a Moment</h2>

      {/* NAME  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Moment Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE  */}
      <FloatingLabel controlId="floatingInput2" label="Moment Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* CATEGORY SELECT */}
      <FloatingLabel controlId="floatingSelect" label="Category">
        <Form.Select
          aria-label="Category"
          name="category"
          onChange={handleChange}
          className="mb-3"
          value={formInput.category}
          required
        >
          <option value="">Select a Category</option>
          <option value="Experience">Experience</option>
          <option value="Learn">Learn</option>
          <option value="Schedule">Schedule</option>
          <option value="Sustain">Sustain</option>
        </Form.Select>
      </FloatingLabel>

      {/* DESCRIPTION  */}
      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="description"
          placeholder="Describe the Moment"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* WEEK SELECT */}
      <FloatingLabel controlId="floatingSelect" label="Milestone">
        <Form.Select
          aria-label="Milestone"
          name="milestone_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.milestone_id}
          required
        >
          <option value="">Select a Week</option>
          {
            milestones.map((milestone) => (
              <option
                key={milestone.firebaseKey}
                value={milestone.firebaseKey}
              >
                {milestone.week}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Moment</Button>
    </Form>
  );
}

MomentForm.propTypes = {
  obj: PropTypes.shape({
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    milestone_id: PropTypes.string,
  }),
};

MomentForm.defaultProps = {
  obj: initialState,
};

export default MomentForm;
