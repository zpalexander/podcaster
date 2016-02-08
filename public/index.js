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
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
/* Containers */
import App from './containers/App';
import UI from './containers/UI';
import AddFeed from './containers/AddFeed';
/* Store */
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={UI} />
                <Route path='add' component={AddFeed} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
