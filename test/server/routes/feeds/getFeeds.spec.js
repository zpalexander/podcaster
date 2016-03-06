/**
 * getFeeds.spec.js
 *
 * Unit test for getFeeds route logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
var getFeeds = require('../../../../server/routes/feeds/getFeeds').get;
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
describe('Backend - Feeds: getFeeds', () => {

    it('should return all the feeds', () => {
        // Mock DB calls
        let sampleFeeds = [
            'Feed 1',
            'Feed 2',
            'Feed 3'
        ];
        FeedMock.expects('findAsync').resolves(sampleFeeds);

        // Set up test logic
        let expectedResult = { body: sampleFeeds , status: 200 };

        // Run the test
        getFeeds()
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });

    });

});
