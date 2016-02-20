/**
 * episodes.spec.js
 *
 * Unit tests for the episodes reducer
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
// Files to be tested
import reducer from '../../../public/reducers/episodes';
// Constants
import { TOGGLE_UNPLAYED, REQUEST_EPISODES, RECEIVE_EPISODES } from '../../../public/constants/ActionTypes';



/* Mocks */
const initialState = [];


/* Tests */
describe('Frontend - Reducers: episodes', () => {
    it('should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ' + REQUEST_EPISODES, () => {
        let sampleAction = {
            type: REQUEST_EPISODES
        };
        expect(reducer(initialState, sampleAction)).toEqual(initialState);
    });

    it('should handle ' + RECEIVE_EPISODES, () => {
        let sampleEpisodes = ['episode1', 'episode2', 'episode3'];
        let sampleAction = {
            type: RECEIVE_EPISODES,
            episodes: sampleEpisodes
        };
        expect(reducer(initialState, sampleAction)).toEqual(sampleEpisodes);
    });

    it('should handle ' + TOGGLE_UNPLAYED, () => {
        let sampleEpisodes = [
            {
                _id: 1,
                name: 'episode1',
                unplayed: true
            },
            {
                _id: 2,
                name: 'episode2',
                unplayed: true
            },
            {
                _id: 3,
                name: 'episode3',
                unplayed: true
            }
        ];
        let sampleEpisodeIDs = [1, 2];
        let sampleAction = {
            type: TOGGLE_UNPLAYED,
            episodeIDs: sampleEpisodeIDs
        };
        let expectedResult = [
            {
                _id: 1,
                name: 'episode1',
                unplayed: false
            },
            {
                _id: 2,
                name: 'episode2',
                unplayed: false
            },
            {
                _id: 3,
                name: 'episode3',
                unplayed: true
            }
        ];
        expect(reducer(sampleEpisodes, sampleAction)).toEqual(expectedResult);
    });

});
