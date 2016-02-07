/**
 * activeFeed.spec.js
 *
 * Unit tests for the activeFeed reducer
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
// Files to be tested
import reducer from '../../../public/reducers/activeFeed';
// Constants
import { SHOW_ALL } from '../../../public/constants/Filters';
import { SET_ACTIVE_FEED } from '../../../public/constants/ActionTypes';


/* Mocks */
const initialState = SHOW_ALL;


/* Tests */
describe('Frontend - Reducers: activeFeed', () => {
    it('should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ' + SET_ACTIVE_FEED, () => {
        let sampleFeedName = 'myFeed';
        let sampleAction = {
            type: SET_ACTIVE_FEED,
            feed: sampleFeedName
        };
        expect(reducer(initialState, sampleAction)).toEqual(sampleFeedName);
    });

});
