import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_RESTAURANT = gql`
  mutation createRestaurant($name: String!, $address: String, $type: String, $budget: Budget, $description: String, $rating: Int) {
    createRestaurant(name: $name, address: $address, type: $type, budget: $budget, description: $description, rating: $rating) {
      id
    }
  }
`;

function AddRestaurant({ onFormSubmit }) {
  const [formData, setFormData] = useState({});
  const [createRestaurant] = useMutation(CREATE_RESTAURANT);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createRestaurant({ variables: formData });
      alert("Restaurant added successfully!");
      onFormSubmit && onFormSubmit();
    } catch (error) {
      alert("Error adding restaurant:", error.message);
    }
  };

  const inputStyle = {
    width: '100%', 
    padding: '10px', 
    borderRadius: '5px', 
    border: '1px solid #ccc',
    marginBottom: '20px'
  };


  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Add a Restaurant</h2>
      <form onSubmit={handleSubmit}>
        
        <input 
          style={inputStyle}
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
          required 
        />

        <input 
          style={inputStyle}
          name="address" 
          placeholder="Address" 
          onChange={handleChange} 
        />

        <input 
          style={inputStyle}
          name="type" 
          placeholder="Type" 
          onChange={handleChange} 
        />

        <select 
          style={{ ...inputStyle, appearance: 'none', padding: '10px 40px 10px 10px' }} 
          name="budget" 
          onChange={handleChange}
        >
          <option value="">Select Budget</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        <textarea 
          style={{ ...inputStyle, height: '120px', resize: 'none' }}
          name="description" 
          placeholder="Description" 
          onChange={handleChange}
        ></textarea>

        <input 
          style={inputStyle}
          type="number" 
          name="rating" 
          placeholder="Rating (1-5)" 
          min="1" 
          max="5" 
          onChange={handleChange} 
        />

        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', 
            borderRadius: '5px', 
            backgroundColor: '#007BFF', 
            color: 'white', 
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Add Restaurant
        </button>
        <button 
          onClick={onFormSubmit}
          style={{ 
            padding: '10px 20px', 
            borderRadius: '5px', 
            backgroundColor: '#007BFF', 
            color: 'white', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Return
        </button>
      </form>
    </div>
  );
}

export default AddRestaurant;
