/**
 * This is a functional stateless component. Its primary function is to display the props that were passed into it.
 * It is stateless so it doesn't need to extend React.Component.
 * However, `import React from 'react';` needs to be stated everywhere jsx is used.
 * This component will not have access to React Component Lifecycles.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './CreateRestaurantPortal.scss';

const CreateRestaurantPortal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [restaurantIds, setRestaurantIds] = useState([]);

  const handleGroupNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGroupDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  const handleGroupRestaurantIdsChange = (e) => {
    setRestaurantIds(e.target.value)
  };

  const handleSubmit = async (name, description, restaurantIds) => {
    // Implement later
  }

  return (
    <div className="create-restaurant-portal">
      <input placeholder="Enter restaurant name" value={name} onChange={(e) => handleGroupNameChange(e)} />
      <input placeholder="Enter restaurant description" value={description} onChange={(e) => handleGroupDescriptionChange(e)} />
      <input placeholder="Enter restaurant ids (list format ['a', 'b'])" value={restaurantIds} onChange={(e) => handleGroupRestaurantIdsChange(e)} />
      <button onClick={() => handleSubmit(name, description, restaurantIds)}>Submit</button>
    </div>
  )
}

export default CreateRestaurantPortal;

CreateRestaurantPortal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  restaurantIds: PropTypes.array.isRequired
};

CreateRestaurantPortal.defaultProps = {
  name: "",
  description: "",
  restaurantIds: []
};
