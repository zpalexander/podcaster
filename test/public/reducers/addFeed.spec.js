/**
 * addFeed.spec.js
 *
 * Unit tests for the addFeed reducer
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
// Files to be tested
import reducer from '../../../public/reducers/addFeed';
// Constants
import { HANDLE_ADD_FEED_INPUT, CLEAR_FEED_INPUT, REQUEST_ADD_NEW_FEED, COMPLETE_ADD_NEW_FEED } from '../../../public/constants/ActionTypes';
import { NEW_FEED_NAME, NEW_FEED_URL, NEW_FEED_CATEGORY } from '../../../public/constants/FieldNames';




/* Mocks */
const initialState = {
    newFeedName: '',
    newFeedURL: '',
    newFeedCategory: '',
    isAdding: false
}


/* Tests */
describe('Frontend - Reducers: addFeed', () => {

    it('should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });


    it('should handle input for field ' + NEW_FEED_NAME, () => {
        let sampleAction = {
            type: HANDLE_ADD_FEED_INPUT,
            field: NEW_FEED_NAME,
            text: 'Hello'
        };

        let expectedResult = {
            newFeedName: 'Hello',
            newFeedURL: '',
            newFeedCategory: '',
            isAdding: false
        };

        expect(reducer(initialState, sampleAction)).toEqual(expectedResult);
    });


    it('should handle input for field ' + NEW_FEED_URL, () => {
        let sampleAction = {
            type: HANDLE_ADD_FEED_INPUT,
            field: NEW_FEED_URL,
            text: 'Hello'
        };

        let expectedResult = {
            newFeedName: '',
            newFeedURL: 'Hello',
            newFeedCategory: '',
            isAdding: false
        };

        expect(reducer(initialState, sampleAction)).toEqual(expectedResult);
    });


    it('should handle input for field ' + NEW_FEED_CATEGORY, () => {
        let sampleAction = {
            type: HANDLE_ADD_FEED_INPUT,
            field: NEW_FEED_CATEGORY,
            text: 'Hello'
        };

        let expectedResult = {
            newFeedName: '',
            newFeedURL: '',
            newFeedCategory: 'Hello',
            isAdding: false
        };

        expect(reducer(initialState, sampleAction)).toEqual(expectedResult);
    });


    it('should handle ' + CLEAR_FEED_INPUT, () => {
        let sampleFeedInputState = {
            newFeedName: 'hello',
            newFeedURL: 'http://www.google.com',
            newFeedCategory: 'Movies',
            isAdding: false
        };

        let sampleAction = {
            type: CLEAR_FEED_INPUT
        };

        expect(reducer(sampleFeedInputState, sampleAction)).toEqual(initialState);
    });


    it('should handle ' + REQUEST_ADD_NEW_FEED, () => {
        let sampleAction = {
            type: REQUEST_ADD_NEW_FEED
        };

        let expectedResult = {
            newFeedName: '',
            newFeedURL: '',
            newFeedCategory: '',
            isAdding: true
        };

        expect(reducer(initialState, sampleAction)).toEqual(expectedResult);
    });


    it('should handle ' + COMPLETE_ADD_NEW_FEED, () => {
        let sampleFeedInputState = {
            newFeedName: 'hello',
            newFeedURL: 'http://www.google.com',
            newFeedCategory: 'Movies',
            isAdding: true
        };

        let sampleAction = {
            type: COMPLETE_ADD_NEW_FEED
        };

        let expectedResult = {
            newFeedName: 'hello',
            newFeedURL: 'http://www.google.com',
            newFeedCategory: 'Movies',
            isAdding: false
        };

        expect(reducer(sampleFeedInputState, sampleAction)).toEqual(expectedResult);
    });

});
