import { combineReducers } from 'redux';
import feeds from './feeds';
import episodes from './episodes';

const rootReducer = combineReducers({
    feeds,
    episodes
});

export default rootReducer;
