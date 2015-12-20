(function() {
    'use strict';
    /**
     * errors.js
     *
     * Node errors for returning non-200 status codes
     */

    // Internal server error
    var internalError = new Error();
    internalError.name = 'INTERNAL_SERVER_ERROR';
    internalError.message = 'Something went wrong.';
    internalError.status = 500;

    /* Exports */
    exports.internalError = internalError;

})();
