/**
 * episodes.spec.js
 *
 * Unit tests for the episodes actions
 */

/* Dependencies */
// Libraries and testing tools
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// Files to be tested
import * as actions from '../../../public/actions/episodes';
import * as types from '../../../public/constants/ActionTypes';


/* Mocks */
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


/* Tests */
describe('Frontend - Actions: Episodes', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('should create an action to toggle unplayed status', () => {
        const episodeName = 'My Episode';
        const expectedAction = {
            type: types.TOGGLE_UNPLAYED,
            episode: episodeName
        };
        expect(actions.UItoggleUnplayed(episodeName)).toEqual(expectedAction);
    });

    it('should create an action to set the active episode', () => {
        const episodeName = 'My Episode';
        const expectedAction = {
            type: types.SET_ACTIVE_EPISODE,
            episode: episodeName
        };
        expect(actions.setActiveEpisode(episodeName)).toEqual(expectedAction);
    });

    it('should create an action to unset the active episode', () => {
        const expectedAction = {
            type: types.UNSET_ACTIVE_EPISODE
        };
        expect(actions.unsetActiveEpisode()).toEqual(expectedAction);
    });

    it('should create an action to request a list of episodes', () => {
        const expectedAction = {
            type: types.REQUEST_EPISODES
        };
        expect(actions.requestEpisodes()).toEqual(expectedAction);
    });

    it('should create an action to receive a list of episodes', () => {
        const episodes = ['One', 'Two', 'Three'];
        const expectedAction = {
            type: types.RECEIVE_EPISODES,
            episodes: episodes
        };
        expect(actions.receiveEpisodes(episodes)).toEqual(expectedAction);
    });

    // it('should create an action that queries the backend for episodes', (done) => {
    //     nock('http://localhost:3000')
    //         .get('/episodes')
    //         .reply(200, ['One', 'Two', 'Three'] );

    //     const expectedActions = [
    //         { type: types.REQUEST_EPISODES },
    //         { type: types.RECEIVE_EPISODES, episodes: ['One', 'Two', 'Three'] }
    //     ];
    //     const store = mockStore({episodes: []}, expectedActions, done);
    //     store.dispatch(actions.fetchEpisodes());
    // });

});
