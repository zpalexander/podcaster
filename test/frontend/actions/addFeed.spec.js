/**
 * addFeed.spec.js
 *
 * Unit tests for the addFeed actions
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// Files to be tested
import * as actions from '../../../public/actions/addFeed';
import * as types from '../../../public/constants/ActionTypes';

/* Mocks */
const middlewares = [ thunk ];
//const mockStore = configureMockStore(middlewares);


/* Tests */
describe('Frontend - Actions: AddFeed', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('should create an action to signal a new feed request', () => {
        const expectedAction = {
            type: types.REQUEST_ADD_NEW_FEED
        };
        expect(actions.requestAddNewFeed()).toEqual(expectedAction);
    });

    it('should create an action to signal the completion of a new feed request', () => {
        const expectedAction = {
            type: types.COMPLETE_ADD_NEW_FEED,
            result: {}
        };
        expect(actions.completeAddNewFeed({})).toEqual(expectedAction);
    });

    it('should create an action to handle form input', () => {
        let sampleField = 'MY_FIELD';
        let sampleString = 'abcde';
        const expectedAction = {
            type: types.HANDLE_ADD_FEED_INPUT,
            field: sampleField,
            text: sampleString
        };
        expect(actions.handleAddFeedInput(sampleField, sampleString)).toEqual(expectedAction);
    });

});
