'use strict';
/**
 * create.spec.js
 *
 * Unit tests for the create user logic
 */
/* Dependencies */
// Testing libraries
import expect from 'expect';
import Promise from 'bluebird';
import sinon from 'sinon';
require('sinon-as-promised')(Promise);
// Files to be tested
var createUser = require('../../../../server/routes/user/create');
var User = require('../../../../server/models/User');
var UserMock;


/* Pre-test build up */
beforeEach(() => {
    UserMock = sinon.mock(User);
});

/* Post-test teardown */
afterEach(function() {
    UserMock.restore();
});


/* Test Suite */
describe('Backend - User: create', () => {
    it('should create a correctly formatted user', () => {
        createUser('test')
            .then(result => {
                expect(result).toEqual({ body: { ok: 1 }, status: 200 });
            });
    });
});
