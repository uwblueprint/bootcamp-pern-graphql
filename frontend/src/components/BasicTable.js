import React from 'react';
import PropTypes from 'prop-types';

import './BasicTable.scss';

/**
 * "Get" specifies a generic return
 * @param {*} object data element; see typing in the PropTypes
 */
const getTableHeaders = (object = {}) => {
  return Object.keys(object).concat(['stars']);
}

/**
 * "render" specifies JSX in the return 
 * @param {*} row data element
 */
const renderRows = (row = {}) => {
  let starString = " ";
  for (let i = 0; i < (Object.values(row)[Object.values(row).length - 1]); i += 1) {
    starString += "⭐️ ";
  }

  return (
    <tr key={row.id}>
      {Object.values(row).map(
        (value, i) => {
          return (<td key={i}>{value}</td>);
        }
      )}
      <td key={7} className="star-row">{starString}</td>
    </tr>
  )
}

const BasicTable = ({ data }) => {
  return (
    <table className="basic-table">
      <tbody>
        <tr>
          {getTableHeaders(data[0]).map(
            headerName => <th key={headerName}>{headerName}</th>
          )}
        </tr>
        {data.map(renderRows)}
      </tbody>
    </table>
  )
}

export default BasicTable;

/**
 * Much more substantial example of typing properties. If the data does not align to the type, an error will occur.
 */
BasicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      budget: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      stars: PropTypes.string,
      type: PropTypes.string
    })
  )
};

BasicTable.defaultProps = {
  data: []
};
