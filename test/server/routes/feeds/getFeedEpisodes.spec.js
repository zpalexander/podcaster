/**
 * getFeedEpisodes.spec.js
 *
 * Unit test for getFeedEpisodes route logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
const getFeedEpisodes = require('../../../../server/routes/feeds/getFeedEpisodes');
const getFeedFromID = require('../../../../server/routes/feeds/getFeedFromID');
//var errors = require('../../../../server/util/errors');
const Episode = require('../../../../server/models/Episode');
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
describe('Backend - Feeds: getFeedEpisodes', () => {

    // it('should return a feed\'s episodes based on an ID', () => {
    //     // Mock DB calls
    //     let sampleEpisodes = [
    //         'Episode 1',
    //         'Episode 2',
    //         'Episode 3'
    //     ];
    //     EpisodeMock.expects('findAsync').resolves(sampleEpisodes);

    //     // Mock other logic
    //     let exampleFeedResult = function() {
    //         return new Promise(() => { return {name: 'Sample Feed' }});
    //     };
    //     sinon.stub(getFeedFromID, 'get', exampleFeedResult);

    //     // Define test parameters
    //     let expectedResult = {
    //         body: sampleEpisodes,
    //         status: 200
    //     };

    //     // Run test
    //     getFeedEpisodes(1)
    //         .then(result => expect(result).toEqual(expectedResult));
    // });


    // @TODO: Find a way to stub getFeedFromID
    // it('should return a 404 if the feed being queried for doesn\'t exist', () => {
    //     // Mock other logic
    //     getFeedFromID.get.restore();
    //     let exampleNoFeedResult = function() {
    //         return new Promise(() => {
    //             return errors.notFound;
    //         });
    //     };
    //     sinon.stub(getFeedFromID, 'get', exampleNoFeedResult);

    //     // Define test parameters
    //     let expectedResult = errors.notFound;

    //     // Run test
    //     getFeedEpisodes(1)
    //         .then((result) => {
    //             expect(result).toEqual(expectedResult);
    //         });

    // });

});
