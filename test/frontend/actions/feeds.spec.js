/**
 * feeds.spec.js
 *
 * Unit tests for the feeds actions
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// Files to be tested
import * as actions from '../../../public/actions/feeds';
import * as types from '../../../public/constants/ActionTypes';


/* Mocks */
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


/* Tests */
describe('Frontend - Actions: Feeds', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('should create an action to set the active feed', () => {
        const feedName = 'My Feed';
        const expectedAction = {
            type: types.SET_ACTIVE_FEED,
            feed: feedName
        };
        expect(actions.setActiveFeed(feedName)).toEqual(expectedAction);
    });

    it('should create an action to request a list of feeds', () => {
        const expectedAction = {
            type: types.REQUEST_FEEDS
        };
        expect(actions.requestFeeds()).toEqual(expectedAction);
    });

    it('should create an action to receive a list of feeds', () => {
        const feeds = ['One', 'Two', 'Three'];
        const expectedAction = {
            type: types.RECEIVE_FEEDS,
            feeds: feeds
        };
        expect(actions.receiveFeeds(feeds)).toEqual(expectedAction);
    });

    // it('should create an action that queries the backend for feeds', (done) => {
    //     var nockScope = nock('http://localhost:3000')
    //         .get('/feeds')
    //         .reply(200, ['One', 'Two', 'Three'] );

    //     const expectedActions = [
    //         { type: types.REQUEST_FEEDS },
    //         { type: types.RECEIVE_FEEDS, feeds: ['One', 'Two', 'Three'] }
    //     ];
    //     const store = mockStore({feeds: []}, expectedActions, done);
    //     store.dispatch(actions.fetchFeeds());
    // });

});
