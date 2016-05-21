'use strict';
/**
 * log.js
 *
 * Sets up the Bunyan logger
 * for the project
 */
/* Dependencies */
const bunyan = require('bunyan');

/* Initialize the logger */
var log = bunyan.createLogger({
    name: 'podcaster',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'warn',
            stream: process.stdout
        },
        {
            level: 'error',
            stream: process.stderr
        },
        {
            level: 'fatal',
            stream: process.stderr
        }
    ],
    serializers: bunyan.stdSerializers
});

/**
 * Create a request logger middleware that shows
 * request time and response content length
 */
log.requestLogger = (req, res, next) => {
    var start = new Date();
    var end = res.end;
    res.end = function(chunk, encoding) {
        var responseTime = (new Date()).getTime() - start.getTime();
        end.call(res, chunk, encoding);
        var contentLength = parseInt(res.getHeader('Content-Length'), 10);
        var data = {
            res: res,
            req: req,
            responseTime: responseTime,
            contentLength: isNaN(contentLength) ? 0 : contentLength
        };
        log.info(data, '%s %s %d %dms - %d', data.req.method, data.req.url, data.res.statusCode, data.responseTime, data.contentLength);
    };
    next();
};

/**
 * Create a custom error logger middleware
 * that logs errors that Express would normally handle
 */
log.errorLogger = (err, req, res, next) => {
    log.error({ req: req, res: res, error: err }, err.stack);
    next(err);
};


/* Module Exports */
module.exports = log;
