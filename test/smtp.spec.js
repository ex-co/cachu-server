const expect = require('chai').expect;
const smtp = require('../lib/smtp');

describe('SMTP TEST MODULE', () =>  {
    describe('Test Function: isValidEmail(email)', () => {
        it('should be false with wrong e-mail format', () => {
            return expect(smtp.isValidEmail('test')).to.equal(false);
        });
        it('should be true with proper e-mail format', () => {
            return expect(smtp.isValidEmail('test@test.com')).to.equal(true);
        });
    });
});