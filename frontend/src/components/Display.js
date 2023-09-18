import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";

import BasicTable from "./BasicTable";
import SignIn from "./SignIn";
import "./Display.scss";
import { removeTypeName } from "../utilities";

const restaurantsQuery = gql`
  {
    restaurants {
      id
      name
      address
      type
      budget
      description
      rating
    }
  }
`;

const Display = (props) => {
  /**
   * useQuery is a React Hook (refer to accompanying slides for a quick explanation).
   * when this component renders, it executes the provided GraphQL query using our
   * Apollo client, obtaining the data we need
   */

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { loading, error, data } = useQuery(restaurantsQuery, {
    onCompleted: (data) => {
      props.loadData(removeTypeName(data.restaurants));
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading restaurants!</p>;

  return (
    <div className="display-container">
      {!isSubmitted ? (
        <SignIn isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      ) : (
        <div>
          <h2>Local Data Handling</h2>
          <BasicTable data={removeTypeName(data.restaurants)} />
          <h2>Global Data Handling</h2>
          <BasicTable data={props.storeData} />
        </div>
      )}
    </div>
  );
};

export default Display;

Display.propTypes = {};
