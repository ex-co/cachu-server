var should = require('should');
var validateEmail = require('../lib/smtp.js').validateEmail;

describe('CACHU SMTP TEST', function () {
    describe('validateEmail', function () {
        it('Email Address Validation Test: Proper Email', function () {
            return validateEmail('test@test.test').should.be.exactly(true);
        });
        it('Email Address Validation Test: Wrong Email', function () {
            return validateEmail('test').should.be.exactly(false);
        });
    });
});