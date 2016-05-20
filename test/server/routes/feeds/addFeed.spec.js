/**
 * addFeed.spec.js
 *
 * Unit test for addFeed route logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
var addFeed = require('../../../../server/routes/feeds/addFeed');
var refreshFeeds = require('../../../../server/routes/feeds/refreshFeedEpisodes');
var Feed = require('../../../../server/models/Feed');
var FeedMock;


/* Pre-test build up */
beforeEach(() => {
    FeedMock = sinon.mock(Feed);
});

/* Post-test teardown */
afterEach(function() {
    FeedMock.restore();
});


/* Test Suite */
describe('Backend - Feeds: addFeed', () => {

    // Find a way to stub refreshFeeds
    // it('should add a feed and refresh its episodes', () => {
    //     // Mock other logic
    //     let mockRefreshFeedEpisodes = function() {
    //         return new Promise(() => {
    //             return { body: { ok: 1 }, status: 200 };
    //         });
    //     };
    //     sinon.stub(refreshFeeds, 'stubme', mockRefreshFeedEpisodes);

    //     // Set up test logic
    //     let expectedResult = { body: { ok: 1 }, status: 200 };

    //     // Run the test
    //     addFeed({})
    //         .then((result) => {
    //             expect(result).toEqual(expectedResult);
    //         });

    // });

});
