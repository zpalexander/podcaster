'use strict';
/**
 * stringToBool.js
 *
 * Convert a string to a boolean
 */

module.exports = stringToBool;

function stringToBool(_str) {
    if (typeof(_str) === 'boolean') { return _str; }
    switch (_str.toLowerCase().trim()) {
        case 'true': case 'yes': case '1': return true;
        case 'false': case 'no': case '0': case null: return false;
        default: return Boolean(_str);
    }
};
