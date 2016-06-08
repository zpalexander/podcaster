'use strict';

/**
 * emailTransporter.spec.js
 *
 * Unit tests for the email transporter
 */

/* Dependencies */
import expect from 'expect';
const errors = require('../../../server/util/errors');
const mock = require('mock-require');
mock('../../../server/util/config', {
    emailOptions: {
        username: 'test@gmail.com',
        password: 'password'
    }
});
/* Files to be tested */
const emailTransporter = require('../../../server/util/emailTransporter');

describe('Backend - Utils: emailTransporter', () => {

    it('should use nodemailer to create an email transporter', () => {
        const result = emailTransporter.getTransporter();
        expect(result.transporter.options.service).toEqual('Gmail');
        expect(result.transporter.options.auth.user).toEqual('test@gmail.com');
        expect(result.transporter.options.auth.pass).toEqual('password');
        expect(result.transporter.options.port).toEqual(465);
        expect(result.transporter.options.host).toEqual('smtp.gmail.com');
        expect(result.transporter.options.secure).toEqual(true);
    });

    it('should build the mail options', () => {
        const sampleRecipient = 'me@gmail.com';
        const sampleSubject = 'Sample Subject';
        const sampleBody = 'This is the sample body of the email';

        const result = emailTransporter.buildMailOptions(sampleRecipient, sampleSubject, sampleBody);
        expect(result.from).toEqual('Sender Address');
        expect(result.to).toEqual(sampleRecipient);
        expect(result.subject).toEqual(sampleSubject);
        expect(result.html).toEqual(sampleBody);
    });

    it('should refuse to send an email to an invalid address', () => {
        const sampleRecipient = 'notAnEmail';
        const sampleSubject = 'Sample Subject';
        const sampleBody = 'This is the sample body of the email';

        try {
            emailTransporter.buildMailOptions(sampleRecipient, sampleSubject, sampleBody);
        } catch(e) {
            expect(e).toEqual(errors.invalidEmailAddress);
        }
    });

});
