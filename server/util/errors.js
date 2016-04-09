(function() {
    'use strict';
    /**
     * errors.js
     *
     * Node errors for returning non-200 status codes
     */

    // Does not exist
    var notFound = new Error();
    notFound.name = 'RESOURCE_NOT_FOUND';
    notFound.message = 'The resource being queried does not exist.';
    notFound.status = 404;

    // Invalid feed name
    var invalidFeedName = new Error();
    invalidFeedName.name = "INVALID_FEED_NAME";
    invalidFeedName.message = "The name of the feed cannot be blank";
    invalidFeedName.status = 400;

    // Invalid feed URL
    var invalidFeedURL = new Error();
    invalidFeedURL.name = "INVALID_FEED_URL";
    invalidFeedURL.message = "The URL of the feed must be valid";
    invalidFeedURL.status = 400;

    // Internal server error
    var internalError = new Error();
    internalError.name = 'INTERNAL_SERVER_ERROR';
    internalError.message = 'Something went wrong.';
    internalError.status = 500;

    /* Exports */
    exports.notFound = notFound;
    exports.invalidFeedName = invalidFeedName;
    exports.invalidFeedURL = invalidFeedURL;
    exports.internalError = internalError;

})();
