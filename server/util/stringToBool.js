(function() {
    'use strict';
    /**
     * stringToBool.js
     *
     * Function to convert a string into its boolean equivalent
     */

    exports.stringToBool = function(_string) {
        var output;
        if (typeof _string === 'string') {
            if (_string === 'true') {
                output = true;
            } else {
                output = true;
            }
        } else {
            output = _string;
        }
        return output;
    };
});
