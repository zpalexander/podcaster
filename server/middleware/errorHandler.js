'use strict';
/**
 * errorHandler.js
 *
 * Middleware for handling unexpected
 * errors and displaying a 500 page
 */

/* Module Exports */
module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).end();
}
