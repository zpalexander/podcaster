/**
 * refreshFeed.spec.js
 *
 * Unit tests for the refreshFeed actions
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// Files to be tested
import * as actions from '../../../public/actions/refreshFeed';
import * as types from '../../../public/constants/ActionTypes';

/* Mocks */
//const middlewares = [ thunk ];
//const mockStore = configureMockStore(middlewares);


/* Tests */
describe('Frontend - Actions: RefreshingFeed', () => {
    afterEach(() => {
        nock.cleanAll()
    });


    it('should create an action to signal a feed refresh request', () => {
        const expectedAction = {
            type: types.REQUEST_REFRESH
        };
        expect(actions.requestRefresh()).toEqual(expectedAction);
    });


    it('should create an action to signal the completion of a feed refresh request', () => {
        const expectedAction = {
            type: types.COMPLETE_REFRESH,
            result: {}
        };
        expect(actions.completeRefresh({})).toEqual(expectedAction);
    });

});
