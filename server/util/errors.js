'use strict';
/**
 * errors.js
 *
 * Node errors for returning non-200 status codes
 */

// Does not exist
const notFound = new Error();
notFound.name = 'RESOURCE_NOT_FOUND';
notFound.message = 'The resource being queried does not exist.';
notFound.status = 404;

// Invalid feed name
const invalidFeedName = new Error();
invalidFeedName.name = 'INVALID_FEED_NAME';
invalidFeedName.message = 'The name of the feed cannot be blank';
invalidFeedName.status = 400;

// Invalid feed URL
const invalidFeedURL = new Error();
invalidFeedURL.name = 'INVALID_FEED_URL';
invalidFeedURL.message = 'The URL of the feed must be valid';
invalidFeedURL.status = 400;

// Invalid email address
const invalidEmailAddress = new Error();
invalidEmailAddress.name = 'INVALID_EMAIL_ADDRESS';
invalidEmailAddress.message = 'The username provided is not a valid email address';
invalidEmailAddress.status = 400;

// Access denied
const accessDenied = new Error();
accessDenied.name = 'ACCESS_DENIED';
accessDenied.message = 'You are not authorized to access this resource.';
accessDenied.status = 401;

// Internal server error
const internalError = new Error();
internalError.name = 'INTERNAL_SERVER_ERROR';
internalError.message = 'Something went wrong.';
internalError.status = 500;

/* Exports */
exports.notFound = notFound;
exports.invalidFeedName = invalidFeedName;
exports.invalidFeedURL = invalidFeedURL;
exports.invalidEmailAddress = invalidEmailAddress;
exports.accessDenied = accessDenied;
exports.internalError = internalError;
