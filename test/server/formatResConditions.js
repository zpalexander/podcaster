(function() {
    'use strict';
    /**
     * formatResConditions.js
     *
     * Helper for writing Express
     * controller unit tests
     */
    var _ = require('lodash');

    var formatResConditions = function(resultFuncs, done) {
        var modifiedResultFuncs = {};
        var names = Object.getOwnPropertyNames(resultFuncs);
        var funcsProcessed = [];

        _.forOwn(resultFuncs, function(resultFunc, resultFuncName) {
            funcsProcessed.push(resultFuncName);
            var modifiedFunc;

            if (names.length === funcsProcessed.length) {
                modifiedFunc = function(arg) {
                    resultFunc(arg);
                    done();
                };
            } else {
                modifiedFunc = function(arg) {
                        resultFunc(arg);
                        return this;
                };
            }

            modifiedResultFuncs[resultFuncName] = modifiedFunc;
        });

        return modifiedResultFuncs;
    };

    exports.default = formatResConditions;

}());
