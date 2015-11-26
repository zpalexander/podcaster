import { combineReducers } from 'redux';
import feeds from './feeds';
import episode from './episode';

const rootReducer = combineReducers({
    feeds,
    episode
});

export default rootReducer;
