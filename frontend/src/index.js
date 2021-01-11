import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql", // TODO: put this in an .env file
  cache: new InMemoryCache()
});

/**
 * While App.js is the root of your React App, index.js is the root of your frontend.
 * ReactDOM.render(...) attaches the component to the <div id="root" /> tag in your index.html
 */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
