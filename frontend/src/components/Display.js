/**
 * This is a Stateful Component. Its primary purpose is to fetch data, or do other logic that requires component lifecycles
 */
import React from 'react';
import axios from 'axios';

import BasicTable from './BasicTable';
import './Display.scss';

const RESTAURANTS_QUERY = `
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

const query = {
  "query": RESTAURANTS_QUERY
}

/* TODO: convert to function component to use ApolloClient's useQuery hook */
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchData = () => {
    axios.post("/graphql", query)
      .then(res => {
        this.setState({ data: res.data["data"]["restaurants"] });
        this.props.loadData(res.data["data"]["restaurants"]);
      })
  }

  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="display-container">
        <h2>Local Data Handling</h2>
        <BasicTable data={this.state.data} />
        <h2>Global Data Handling</h2>
        <BasicTable  data={this.props.storeData} />
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
