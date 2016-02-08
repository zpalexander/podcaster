/**
 * index.js
 *
 * Entry point for the React / Redux
 * frontend application
 */

/* Dependencies */
import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute } from 'react-router';
// import { createHistory } from 'history';
// import { syncReduxAndRouter } from 'redux-simple-router';
/* Containers */
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
