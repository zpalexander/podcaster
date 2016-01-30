/**
 * admin.spec.js
 *
 * Unit tests for the admin reducer
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
// Files to be tested
import reducer from '../../../public/reducers/activeEpisode';
// Constants
import { SET_ACTIVE_EPISODE, UNSET_ACTIVE_EPISODE } from '../../../public/constants/ActionTypes';



/* Mocks */
const initialState = '';


/* Tests */
describe('Frontend - Reducers: activeEpisode', () => {
    it('should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ' + SET_ACTIVE_EPISODE, () => {
        let sampleEpisodeName = 'myEpisode';
        let sampleAction = {
            type: SET_ACTIVE_EPISODE,
            episode: sampleEpisodeName
        };
        expect(reducer(initialState, sampleAction)).toEqual(sampleEpisodeName);
    });

    it('should handle ' + UNSET_ACTIVE_EPISODE, () => {
        let sampleSetState = 'myEpisode';
        let sampleAction = {
            type: UNSET_ACTIVE_EPISODE
        };
        expect(reducer(sampleSetState, sampleAction)).toEqual(initialState);
    });

});
