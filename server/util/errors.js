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

    // Internal server error
    var internalError = new Error();
    internalError.name = 'INTERNAL_SERVER_ERROR';
    internalError.message = 'Something went wrong.';
    internalError.status = 500;

    /* Exports */
    exports.notFound = notFound;
    exports.internalError = internalError;

})();
