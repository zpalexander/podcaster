/**
 * feeds.spec.js
 *
 * Unit tests for the feeds reducer
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
// Files to be tested
import reducer from '../../../public/reducers/feeds';
// Constants
import { ADD_FEED, UPDATE_FEED, DELETE_FEED, REQUEST_FEEDS, RECEIVE_FEEDS } from '../../../public/constants/ActionTypes';


/* Mocks */
const initialState = [];


/* Tests */
describe('Frontend - Reducers: activeFeed', () => {
    it('should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ' + ADD_FEED, () => {
        let sampleFeeds = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            }
        ];
        let sampleNewFeed = {
            feedID: 'feed2',
            name: 'Feed Two',
            url: 'http://duckduckgo.com/',
            category: 'science'
        };
        let sampleAction = {
            type: ADD_FEED,
            feedID: sampleNewFeed.feedID,
            name: sampleNewFeed.name,
            url: sampleNewFeed.url,
            category: sampleNewFeed.category
        };
        let expectedResponse = sampleFeeds.concat(sampleNewFeed);

        expect(reducer(sampleFeeds, sampleAction)).toEqual(expectedResponse);
    });

    it('should handle ' + UPDATE_FEED, () => {
        let sampleFeeds = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            }
        ];
        let sampleAction = {
            type: UPDATE_FEED
        };

        expect(reducer(sampleFeeds, sampleAction)).toEqual(sampleFeeds);
    });

    it('should handle ' + DELETE_FEED, () => {
        let sampleFeeds = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            },
            {
                feedID: 'feed2',
                name: 'Feed Two',
                url: 'http://duckduckgo.com/',
                category: 'science'
            }
        ];
        let feedToDelete = 'feed2';

        let sampleAction = {
            type: DELETE_FEED,
            feedID: feedToDelete
        };

        let expectedResult = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            }
        ];

        expect(reducer(sampleFeeds, sampleAction)).toEqual(expectedResult);
    });

    it('should handle ' + REQUEST_FEEDS, () => {
        let sampleFeeds = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            }
        ];
        let sampleAction = {
            type: REQUEST_FEEDS
        };

        expect(reducer(sampleFeeds, sampleAction)).toEqual(sampleFeeds);
    });

    it('should handle ' + RECEIVE_FEEDS, () => {
        let sampleFeeds = [
            {
                feedID: 'feed1',
                name: 'Feed One',
                url: 'http://www.google.com/',
                category: 'technology'
            }
        ];
        let sampleAction = {
            type: RECEIVE_FEEDS,
            feeds: sampleFeeds
        };

        expect(reducer(initialState, sampleAction)).toEqual(sampleFeeds);
    });

});
