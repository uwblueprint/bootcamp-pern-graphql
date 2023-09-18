// Global imports
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Relative imports
import Title from './components/Title';
import DisplayContainer from './components/DisplayContainer';
import AddRestaurant from './components/AddRestaurant';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  const [showForm, setShowForm] = useState(false);  // State to manage showing the form

  const buttonStyle = {
    display: 'block',
    margin: '40px auto',
    padding: '15px 30px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textDecoration: 'none'
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title teamName="Subway" />

        {/* Ternary condition to display form or main content */}
        {showForm ? (
          <AddRestaurant onFormSubmit={() => setShowForm(false)} />
        ) : (
          <>
            <DisplayContainer />
            <button style={buttonStyle} onClick={() => setShowForm(true)} onMouseOver={e => e.target.style.backgroundColor = '#0056b3'} onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}>
              Add New Restaurant
            </button>
          </>
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
