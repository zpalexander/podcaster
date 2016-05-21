/**
 * stringToBool.spec.js
 *
 * Unit tests for the stringToBool function
 */

/* Dependencies */
import expect from 'expect';
/* Files to be tested */
var stringToBool = require('../../../server/util/stringToBool');

describe('Backend - Utils: stringToBool', () => {
    it('should return a true boolean for the string \'true\'', () => {
        let input = 'true';
        let expectedResult = true;
        expect(stringToBool(input)).toEqual(expectedResult);
    });

    it('should return a false boolean for the string \'false\'', () => {
        let input = 'false';
        let expectedResult = false;
        expect(stringToBool(input)).toEqual(expectedResult);
    });

    it('should return the same boolean when given a boolean', () => {
        let input = true;
        let expectedResult = true;
        expect(stringToBool(input)).toEqual(expectedResult);
        input = false;
        expectedResult = false;
        expect(stringToBool(input)).toEqual(expectedResult);
    });
});
