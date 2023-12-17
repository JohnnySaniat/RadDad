import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMilestone, getMilestones, updateMilestone } from '../../api/milestoneData';

const initialState = {
  week: '',
  image: '',
  description: '',
};

function MilestoneForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setMilestones] = useState([]);
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
      updateMilestone(formInput).then(() => router.push('/milestones'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMilestone(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateMilestone(patchPayload).then(() => {
          router.push('/milestones');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.week ? 'Update' : 'Create'} a Milestone</h2>

      {/* MILESTONE SELECT */}
      <FloatingLabel controlId="floatingSelect" label="Milestone">
        <Form.Select
          aria-label="Milestone"
          name="week"
          onChange={handleChange}
          className="mb-3"
          value={formInput.week}
          required
        >
          <option value="">Select a Milestone</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
        </Form.Select>
      </FloatingLabel>

      {/* IMAGE  */}
      <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* NOTE  */}
      <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Milestone</Button>
    </Form>
  );
}

MilestoneForm.propTypes = {
  obj: PropTypes.shape({
    week: PropTypes.string,
    image: PropTypes.string,
    note: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

MilestoneForm.defaultProps = {
  obj: initialState,
};

export default MilestoneForm;
