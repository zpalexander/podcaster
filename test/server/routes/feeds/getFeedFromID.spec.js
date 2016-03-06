/**
 * getFeedFromID.spec.js
 *
 * Unit test for getFeedFromID route logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
var getFeedFromID = require('../../../../server/routes/feeds/getFeedFromID').get;
var errors = require('../../../../server/util/errors');
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
describe('Backend - Feeds: getFeedFromID', () => {

    it('should return a feed based on an ID', () => {
        // Mock DB calls
        var sampleFeed = [{
            _id : 1,
            name : "99 Percent Invisible",
            url : "http://feeds.99percentinvisible.org/99percentinvisible",
            category : "News"
        }];
        FeedMock.expects('findAsync').resolves(sampleFeed);

        // Set up test conditions
        let expectedResult = {
            body: sampleFeed,
            status: 200
        };

        // Run test
        getFeedFromID(1)
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });
    });


    it('should return a 404 if the ID doesn\'t have an associated feed', () => {
        // Mock DB calls
        let mongoResponse = [];
        FeedMock.expects('findAsync').resolves(mongoResponse);

        // Set up test conditions
        let expectedResult = errors.notFound;

        // Run test
        getFeedFromID(1)
            .then((result) => {
                expect(result).toEqual(expectedResult);
            });
    });

});
