/**
 * toggleUnplayed.spec.js
 *
 * Unit test for toggleUnplayed episode route logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
var toggleUnplayed = require('../../../../server/routes/episodes/toggleUnplayed').toggle;
var errors = require('../../../../server/util/errors');
var Episode = require('../../../../server/models/Episode');
var EpisodeMock;


/* Pre-test build up */
beforeEach(() => {
    EpisodeMock = sinon.mock(Episode);
});

/* Post-test teardown */
afterEach(function() {
    EpisodeMock.restore();
});


/* Test Suite */
describe('Backend - Episodes: toggleUnplayed', () => {

    it('should toggle one episode', () => {
        // Mock DB calls
        let toggleResult = {
            nModified: 1,
            ok: 1
        }
        EpisodeMock.expects('updateAsync').resolves(toggleResult);

        // Set up test logic
        let sampleEpisodeIds = [1];
        let sampleUnplayedStatus = false;
        let expectedResult = { message: 'Toggle successful', status: 200 }

        // Run the test
        toggleUnplayed(sampleEpisodeIds, sampleUnplayedStatus)
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });
    });


    it('should toggle multiple episodes', () => {
        // Mock DB calls
        let toggleResult = {
            nModified: 3,
            ok: 1
        }
        EpisodeMock.expects('updateAsync').resolves(toggleResult);

        // Set up test logic
        let sampleEpisodeIds = [1, 2, 3];
        let sampleUnplayedStatus = false;
        let expectedResult = { message: 'Toggle successful', status: 200 }

        // Run the test
        toggleUnplayed(sampleEpisodeIds, sampleUnplayedStatus)
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });
    });


    it('should return 404 if the episode ID given is not valid', () => {
        // Mock DB calls
        let toggleResult = {
            nModified: 0,
            ok: 1
        };
        EpisodeMock.expects('updateAsync').resolves(toggleResult);

        // Set up test logic
        let sampleEpisodeIds = [1];
        let sampleUnplayedStatus = false;
        let expectedResult = errors.notFound;

        // Run the test
        toggleUnplayed(sampleEpisodeIds, sampleUnplayedStatus)
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });
    });

});
